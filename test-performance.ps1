#!/usr/bin/env pwsh
# Performance Testing Script for Structural Optimism Site

Write-Host "=== Structural Optimism Performance Testing ===" -ForegroundColor Cyan
Write-Host ""

# Check if site is built
if (-not (Test-Path "site/index.html")) {
    Write-Host "Error: Site not built. Run 'mkdocs build' first." -ForegroundColor Red
    exit 1
}

Write-Host "[OK] Site build found" -ForegroundColor Green
Write-Host ""

# Analyze built site
Write-Host "=== Site Analysis ===" -ForegroundColor Cyan

# Count HTML files
$htmlFiles = Get-ChildItem -Path "site" -Filter "*.html" -Recurse
$htmlCount = $htmlFiles.Count
Write-Host "HTML files: $htmlCount"

# Calculate total size
$totalSize = 0
Get-ChildItem -Path "site" -Recurse -File | ForEach-Object {
    $totalSize += $_.Length
}
$totalSizeMB = [math]::Round($totalSize / 1MB, 2)
$totalSizeKB = [math]::Round($totalSize / 1KB, 2)
Write-Host "Total site size: $totalSizeKB KB"

# Analyze by file type
Write-Host ""
Write-Host "=== Size by File Type ===" -ForegroundColor Cyan

# HTML
$htmlSize = (Get-ChildItem -Path "site" -Filter "*.html" -Recurse -File | Measure-Object -Property Length -Sum).Sum
if ($null -eq $htmlSize) { $htmlSize = 0 }
$htmlSizeKB = [math]::Round($htmlSize / 1KB, 2)
Write-Host "HTML: $htmlSizeKB KB"

# CSS
$cssSize = (Get-ChildItem -Path "site" -Filter "*.css" -Recurse -File | Measure-Object -Property Length -Sum).Sum
if ($null -eq $cssSize) { $cssSize = 0 }
$cssSizeKB = [math]::Round($cssSize / 1KB, 2)
Write-Host "CSS: $cssSizeKB KB"

# JavaScript
$jsSize = (Get-ChildItem -Path "site" -Filter "*.js" -Recurse -File | Measure-Object -Property Length -Sum).Sum
if ($null -eq $jsSize) { $jsSize = 0 }
$jsSizeKB = [math]::Round($jsSize / 1KB, 2)
Write-Host "JavaScript: $jsSizeKB KB"

# Images
$imageSize = 0
@("*.png", "*.jpg", "*.jpeg", "*.webp", "*.svg", "*.gif") | ForEach-Object {
    $files = Get-ChildItem -Path "site" -Filter $_ -Recurse -File -ErrorAction SilentlyContinue
    if ($files) {
        $files | ForEach-Object { $imageSize += $_.Length }
    }
}
$imageSizeKB = [math]::Round($imageSize / 1KB, 2)
Write-Host "Images: $imageSizeKB KB"

# Fonts
$fontSize = 0
@("*.woff", "*.woff2", "*.ttf", "*.eot") | ForEach-Object {
    $files = Get-ChildItem -Path "site" -Filter $_ -Recurse -File -ErrorAction SilentlyContinue
    if ($files) {
        $files | ForEach-Object { $fontSize += $_.Length }
    }
}
$fontSizeKB = [math]::Round($fontSize / 1KB, 2)
Write-Host "Fonts: $fontSizeKB KB"

# Check for large files
Write-Host ""
Write-Host "=== Large Files (over 100KB) ===" -ForegroundColor Cyan
$largeFiles = Get-ChildItem -Path "site" -Recurse -File | Where-Object { $_.Length -gt 100KB } | Sort-Object Length -Descending
if ($largeFiles.Count -eq 0) {
    Write-Host "[OK] No files larger than 100KB" -ForegroundColor Green
} else {
    foreach ($file in $largeFiles) {
        $sizeKB = [math]::Round($file.Length / 1KB, 2)
        $relativePath = $file.FullName.Replace((Get-Location).Path + "\site\", "")
        Write-Host "  $relativePath : $sizeKB KB" -ForegroundColor Yellow
    }
}

# Check minification
Write-Host ""
Write-Host "=== Minification Check ===" -ForegroundColor Cyan

$sampleHtml = Get-Content "site/index.html" -Raw
$hasExcessiveWhitespace = $sampleHtml -match "\n\s{4,}"

if ($hasExcessiveWhitespace) {
    Write-Host "[WARN] HTML may not be fully minified" -ForegroundColor Yellow
} else {
    Write-Host "[OK] HTML appears minified" -ForegroundColor Green
}

# Performance Budget Check
Write-Host ""
Write-Host "=== Performance Budget Check ===" -ForegroundColor Cyan

$budgets = @{
    "HTML" = 50
    "CSS" = 100
    "JavaScript" = 200
    "Images" = 500
    "Fonts" = 100
    "Total" = 1024
}

$actual = @{
    "HTML" = $htmlSizeKB
    "CSS" = $cssSizeKB
    "JavaScript" = $jsSizeKB
    "Images" = $imageSizeKB
    "Fonts" = $fontSizeKB
    "Total" = $totalSizeKB
}

foreach ($category in $budgets.Keys) {
    $budget = $budgets[$category]
    $used = $actual[$category]
    $percentValue = [math]::Round(($used / $budget) * 100, 1)
    
    if ($used -le $budget) {
        Write-Host "[OK] $category : $used KB / $budget KB" -ForegroundColor Green
    } else {
        Write-Host "[OVER] $category : $used KB / $budget KB" -ForegroundColor Red
    }
}

# Summary
Write-Host ""
Write-Host "=== Summary ===" -ForegroundColor Cyan
Write-Host "Total Pages: $htmlCount"
Write-Host "Total Size: $totalSizeKB KB"
$avgSize = [math]::Round($totalSizeKB / $htmlCount, 2)
Write-Host "Average Page Size: $avgSize KB"
Write-Host ""

# Next steps
Write-Host "=== Next Steps ===" -ForegroundColor Cyan
Write-Host "1. Deploy site to GitHub Pages"
Write-Host "2. Run Lighthouse audit in Chrome DevTools"
Write-Host "3. Test on 3G connection using Network throttling"
Write-Host "4. Target: 90+ Lighthouse score, under 3s load time"
Write-Host ""

Write-Host "Performance testing complete!" -ForegroundColor Green
