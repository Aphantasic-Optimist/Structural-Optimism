#!/usr/bin/env python3
"""
Sync mkdocs.yml with central config.yml

Run this after changing config.yml to update all derived URLs.
"""

import yaml
from pathlib import Path

def main():
    root = Path(__file__).parent.parent
    
    # Load central config
    config_path = root / "config.yml"
    with open(config_path) as f:
        config = yaml.safe_load(f)
    
    owner = config["github"]["owner"]
    repo = config["github"]["repo"]
    
    # Compute derived URLs
    site_url = f"https://{owner.lower()}.github.io/{repo}/"
    repo_url = f"https://github.com/{owner}/{repo}"
    
    # Load mkdocs.yml
    mkdocs_path = root / "mkdocs.yml"
    with open(mkdocs_path) as f:
        mkdocs = yaml.safe_load(f)
    
    # Check if update needed
    current_site_url = mkdocs.get("site_url", "")
    current_repo_url = mkdocs.get("repo_url", "")
    
    if current_site_url == site_url and current_repo_url == repo_url:
        print("✅ mkdocs.yml is already in sync with config.yml")
        return 0
    
    # Update mkdocs.yml (preserve formatting by doing string replacement)
    with open(mkdocs_path) as f:
        content = f.read()
    
    # Replace site_url
    import re
    content = re.sub(
        r'^site_url:.*$',
        f'site_url: {site_url}',
        content,
        flags=re.MULTILINE
    )
    
    # Replace repo_url
    content = re.sub(
        r'^repo_url:.*$',
        f'repo_url: {repo_url}',
        content,
        flags=re.MULTILINE
    )
    
    # Replace repo_name
    content = re.sub(
        r'^repo_name:.*$',
        f'repo_name: {repo}',
        content,
        flags=re.MULTILINE
    )
    
    with open(mkdocs_path, 'w') as f:
        f.write(content)
    
    print(f"✅ Updated mkdocs.yml:")
    print(f"   site_url: {site_url}")
    print(f"   repo_url: {repo_url}")
    print(f"   repo_name: {repo}")
    
    return 0

if __name__ == "__main__":
    exit(main())
