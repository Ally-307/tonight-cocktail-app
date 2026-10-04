$ErrorActionPreference = "Stop"

# 解析项目内各目录，确保构建输入和最终 APK 都归位到 project_009。
$AndroidRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $AndroidRoot
$SdkRoot = Join-Path $ProjectRoot "data\android-toolchain\sdk"
$GradleExecutable = Join-Path $ProjectRoot "data\android-toolchain\gradle\gradle-9.3.1\bin\gradle.bat"
$OutputDir = Join-Path $ProjectRoot "output"
$OutputApk = Join-Path $OutputDir "cocktail-lab-v1.5.0-debug.apk"
$BuiltApk = Join-Path $AndroidRoot "app\build\outputs\apk\debug\app-debug.apk"

# 优先复用当前环境的 JDK 17；本机默认 java.exe 是 Java 8，因此保留已验证的回退路径。
$JdkRoot = $env:JAVA_HOME
if (-not $JdkRoot -or -not (Test-Path -LiteralPath (Join-Path $JdkRoot "bin\java.exe"))) {
    $JdkRoot = "C:\Program Files\ojdkbuild\java-17-openjdk-17.0.3.0.6-1"
}

<#
检查构建依赖是否存在，并输出清晰的中文错误位置。
#>
function Assert-BuildFile {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path,
        [Parameter(Mandatory = $true)]
        [string]$Label
    )

    if (-not (Test-Path -LiteralPath $Path)) {
        throw "$Label 不存在：$Path"
    }
}

Assert-BuildFile -Path (Join-Path $JdkRoot "bin\java.exe") -Label "JDK 17"
Assert-BuildFile -Path (Join-Path $SdkRoot "platforms\android-35\android.jar") -Label "Android API 35"
Assert-BuildFile -Path (Join-Path $SdkRoot "build-tools\35.0.0\apksigner.bat") -Label "Android Build Tools 35"
Assert-BuildFile -Path $GradleExecutable -Label "Gradle 9.3.1"

$env:JAVA_HOME = $JdkRoot
$env:ANDROID_SDK_ROOT = $SdkRoot
$env:Path = "$JdkRoot\bin;$SdkRoot\platform-tools;$env:Path"

Write-Host "[构建] 正在把 src 网页资源打包为 Android APK……"
Push-Location $AndroidRoot
try {
    & $GradleExecutable --no-daemon assembleDebug --console=plain
    if ($LASTEXITCODE -ne 0) {
        throw "Gradle 构建失败，退出码：$LASTEXITCODE"
    }
} finally {
    Pop-Location
}

Assert-BuildFile -Path $BuiltApk -Label "Gradle 构建产物"
New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
Copy-Item -LiteralPath $BuiltApk -Destination $OutputApk -Force

# 交付前同时检查签名和 ZIP 对齐，避免生成看似成功但安装时报错的文件。
& (Join-Path $SdkRoot "build-tools\35.0.0\apksigner.bat") verify --verbose $OutputApk
if ($LASTEXITCODE -ne 0) {
    throw "APK 签名校验失败。"
}

& (Join-Path $SdkRoot "build-tools\35.0.0\zipalign.exe") -c 4 $OutputApk
if ($LASTEXITCODE -ne 0) {
    throw "APK ZIP 对齐校验失败。"
}

$Hash = (Get-FileHash -LiteralPath $OutputApk -Algorithm SHA256).Hash
Write-Host "[完成] APK：$OutputApk"
Write-Host "[完成] SHA-256：$Hash"
