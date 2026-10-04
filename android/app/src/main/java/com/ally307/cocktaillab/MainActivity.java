package com.ally307.cocktaillab;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.graphics.Color;
import android.graphics.Insets;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.window.OnBackInvokedCallback;
import android.window.OnBackInvokedDispatcher;

/**
 * 调酒网页的原生入口：负责加载内置资源、保留网页状态并处理系统返回键。
 */
public final class MainActivity extends Activity {
    private static final String HOME_URL = "file:///android_asset/index.html";
    private static final int TOP_BREATHING_SPACE_DP = 24;
    private WebView webView;
    private OnBackInvokedCallback predictiveBackCallback;

    /**
     * 创建应用界面，并用适合本地交互网页的最小权限配置初始化 WebView。
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(Color.rgb(11, 14, 13));
        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(11, 14, 13));
        configureWebView(webView);
        root.addView(webView, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        ));
        setContentView(root);
        configureSystemBars(root, webView);
        registerPredictiveBack();

        if (savedInstanceState == null) {
            webView.loadUrl(HOME_URL);
        } else {
            webView.restoreState(savedInstanceState);
        }
    }

    /**
     * 启用配方交互依赖的 JavaScript 与本地存储，同时禁止跨域文件访问。
     */
    @SuppressWarnings({"SetJavaScriptEnabled", "deprecation"})
    private void configureWebView(WebView view) {
        WebSettings settings = view.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(false);
        settings.setAllowFileAccessFromFileURLs(false);
        settings.setAllowUniversalAccessFromFileURLs(false);
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);
        settings.setMediaPlaybackRequiresUserGesture(true);

        // 仅调试包开放 WebView 调试入口，正式构建自动保持关闭。
        boolean isDebuggable = (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
        WebView.setWebContentsDebuggingEnabled(isDebuggable);
        view.setWebViewClient(new LocalContentWebViewClient());
    }

    /**
     * 为 Android 15 edge-to-edge、刘海、手势导航与软键盘应用对应的窗口安全区。
     */
    @SuppressWarnings("deprecation")
    private void configureSystemBars(FrameLayout root, WebView view) {
        Window window = getWindow();
        int barColor = Color.rgb(11, 14, 13);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            window.setDecorFitsSystemWindows(false);
            window.setStatusBarColor(Color.TRANSPARENT);
            window.setNavigationBarColor(Color.TRANSPARENT);

            WindowInsetsController controller = window.getInsetsController();
            if (controller != null) {
                int lightBarMask = WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS
                        | WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS;
                controller.setSystemBarsAppearance(0, lightBarMask);
            }

            // 顶部和横向 inset 交给原生容器，并在状态栏下额外留出视觉呼吸区；底部键盘单独避让。
            root.setOnApplyWindowInsetsListener((target, windowInsets) -> {
                Insets systemBars = windowInsets.getInsets(
                        WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout()
                );
                Insets ime = windowInsets.getInsets(WindowInsets.Type.ime());
                int keyboardBottom = windowInsets.isVisible(WindowInsets.Type.ime()) ? ime.bottom : 0;
                int contentTop = systemBars.top + dpToPx(TOP_BREATHING_SPACE_DP);
                if (view.getPaddingLeft() != systemBars.left
                        || view.getPaddingTop() != contentTop
                        || view.getPaddingRight() != systemBars.right
                        || view.getPaddingBottom() != keyboardBottom) {
                    view.setPadding(systemBars.left, contentTop, systemBars.right, keyboardBottom);
                }
                return windowInsets;
            });
            root.requestApplyInsets();
        } else {
            // Android 7-10 继续由系统负责内容避让，只统一深色系统栏与浅色图标。
            window.setStatusBarColor(barColor);
            window.setNavigationBarColor(barColor);
            // Android 8.0 起才支持导航栏图标明暗控制，旧版本只处理状态栏。
            int lightBarFlags = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                lightBarFlags |= View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
            }
            window.getDecorView().setSystemUiVisibility(
                    window.getDecorView().getSystemUiVisibility() & ~lightBarFlags
            );
            view.setPadding(0, dpToPx(TOP_BREATHING_SPACE_DP), 0, 0);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            window.setNavigationBarContrastEnforced(false);
            window.setStatusBarContrastEnforced(false);
        }
    }

    /**
     * 把视觉安全距离从 dp 换算成当前设备像素，保证不同屏幕密度下留白一致。
     */
    private int dpToPx(int dp) {
        return Math.round(dp * getResources().getDisplayMetrics().density);
    }

    /**
     * Android 13 及以上注册预测返回回调，旧系统继续使用 onBackPressed 入口。
     */
    private void registerPredictiveBack() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            predictiveBackCallback = this::handleSystemBack;
            getOnBackInvokedDispatcher().registerOnBackInvokedCallback(
                    OnBackInvokedDispatcher.PRIORITY_DEFAULT,
                    predictiveBackCallback
            );
        }
    }

    /**
     * 保存网页导航和表单状态，避免旋转屏幕后回到首页。
     */
    @Override
    protected void onSaveInstanceState(Bundle outState) {
        webView.saveState(outState);
        super.onSaveInstanceState(outState);
    }

    /**
     * 旧版 Android 返回键与新版预测返回统一进入网页场景返回逻辑。
     */
    @Override
    @SuppressWarnings("deprecation")
    public void onBackPressed() {
        handleSystemBack();
    }

    /**
     * 优先关闭网页内的详情和工作区，再回退 WebView 历史；首页才结束当前 Activity。
     */
    private void handleSystemBack() {
        WebView currentWebView = webView;
        if (currentWebView == null) {
            finish();
            return;
        }

        currentWebView.evaluateJavascript(
                "Boolean(window.handleAndroidBack && window.handleAndroidBack())",
                handled -> {
                    if ("true".equals(handled) || webView == null) return;
                    if (webView.canGoBack()) webView.goBack();
                    else finish();
                }
        );
    }

    /**
     * 及时销毁 WebView，释放渲染进程和页面资源。
     */
    @Override
    protected void onDestroy() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU && predictiveBackCallback != null) {
            getOnBackInvokedDispatcher().unregisterOnBackInvokedCallback(predictiveBackCallback);
            predictiveBackCallback = null;
        }
        if (webView != null) {
            webView.stopLoading();
            webView.setWebViewClient(null);
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }

    /**
     * 内置文件继续在应用内打开，未来新增的外部链接交给系统浏览器处理。
     */
    private final class LocalContentWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri target = request.getUrl();
            if ("file".equalsIgnoreCase(target.getScheme())) {
                return false;
            }

            try {
                startActivity(new Intent(Intent.ACTION_VIEW, target));
            } catch (ActivityNotFoundException ignored) {
                // 系统没有可处理该链接的应用时，保留当前页面。
            }
            return true;
        }
    }
}
