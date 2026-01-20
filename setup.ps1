# Setup script for Windows PowerShell

Write-Host "Setting up Structural Optimism website..." -ForegroundColor Green

# Create virtual environment
Write-Host "Creating Python virtual environment..." -ForegroundColor Cyan
python -m venv venv

# Activate virtual environment
Write-Host "Activating virtual environment..." -ForegroundColor Cyan
& .\venv\Scripts\Activate.ps1

# Upgrade pip
Write-Host "Upgrading pip..." -ForegroundColor Cyan
python -m pip install --upgrade pip

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Cyan
pip install -r requirements.txt

Write-Host ""
Write-Host "Setup complete! ✨" -ForegroundColor Green
Write-Host ""
Write-Host "To activate the virtual environment:" -ForegroundColor Yellow
Write-Host "  .\venv\Scripts\Activate.ps1" -ForegroundColor White
Write-Host ""
Write-Host "To start the development server:" -ForegroundColor Yellow
Write-Host "  mkdocs serve" -ForegroundColor White
Write-Host ""
Write-Host "To build the site:" -ForegroundColor Yellow
Write-Host "  mkdocs build" -ForegroundColor White
