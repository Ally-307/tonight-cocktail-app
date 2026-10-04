# Android APK 构建

本目录把项目根目录的 `src/` 静态网页打包为原生 Android WebView 应用。

- 应用名：今夜调酒
- 包名：`com.ally307.cocktaillab`
- 最低系统：Android 7.0（API 24）
- 目标系统：Android 15（API 35）
- 当前版本：`1.5.0`（versionCode `7`）
- 网页入口：`file:///android_asset/index.html`
- 网络权限：未申请，配方和图片均离线内置
- 系统界面：适配状态栏、刘海屏、手势导航栏与软键盘安全区，Android 15 使用 edge-to-edge；状态栏 inset 下额外保留 24dp 顶部呼吸区
- 调酒音效：Web Audio 离线合成榨汁与冰块碰杯声；全场景可静音，偏好保存在本地，不新增媒体文件或权限
- 返回行为：优先关闭配方详情，再返回匹配页、材料库和首页

构建环境使用项目 `data/android-toolchain/` 中的 Android SDK 与 Gradle 9.3.1，以及 JDK 17。最终 APK 输出到项目根目录的 `output/`。

## 重新构建

在 PowerShell 中执行：

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\android\build-apk.ps1
```

脚本会依次编译、复制、验证签名、检查 ZIP 对齐，并输出 APK 的 SHA-256。当前交付的是直接安装测试版签名；若后续发布到应用商店，需要换成长期保管的正式发布密钥。

当前产物为 `output/cocktail-lab-v1.5.0-debug.apk`，文件大小 `595154` 字节，SHA-256：`CEC3E67A3C63FC48447597337AB91D212272D497039E4F99F02EBC044E3826BC`。新版使用“大摇杯 → 功能票据 → 具体任务”的信息架构，并继续离线内置 34 款配方、47 种材料、收藏、搜索、杯量换算、逐步调制和合成音效。

需要单独检查 Android 兼容性时，在 `android/` 目录使用 JDK 17 运行 `gradlew.bat --no-daemon lintDebug --console=plain`。
