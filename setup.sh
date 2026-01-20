#!/bin/bash
# Setup script for Unix-like systems (macOS, Linux)

echo "Setting up Structural Optimism website..."

# Create virtual environment
echo "Creating Python virtual environment..."
python3 -m venv venv

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo "Installing dependencies..."
pip install -r requirements.txt

echo ""
echo "Setup complete! ✨"
echo ""
echo "To activate the virtual environment:"
echo "  source venv/bin/activate"
echo ""
echo "To start the development server:"
echo "  mkdocs serve"
echo ""
echo "To build the site:"
echo "  mkdocs build"
