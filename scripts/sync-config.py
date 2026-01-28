#!/usr/bin/env python3
"""
Sync mkdocs.yml with central config.yml

Run this after changing config.yml to update all derived URLs.
"""

import re
import yaml
from pathlib import Path

def main():
    root = Path(__file__).parent.parent
    
    # Load central config
    config_path = root / "config.yml"
    with open(config_path, encoding='utf-8') as f:
        config = yaml.safe_load(f)
    
    owner = config["github"]["owner"]
    repo = config["github"]["repo"]
    
    # Compute derived URLs
    site_url = f"https://{owner.lower()}.github.io/{repo}/"
    repo_url = f"https://github.com/{owner}/{repo}"
    
    # Load mkdocs.yml as text (can't use safe_load due to Python-specific tags)
    mkdocs_path = root / "mkdocs.yml"
    with open(mkdocs_path, encoding='utf-8') as f:
        content = f.read()
    
    # Extract current values using regex
    site_url_match = re.search(r'^site_url:\s*(.*)$', content, re.MULTILINE)
    repo_url_match = re.search(r'^repo_url:\s*(.*)$', content, re.MULTILINE)
    
    current_site_url = site_url_match.group(1).strip() if site_url_match else ""
    current_repo_url = repo_url_match.group(1).strip() if repo_url_match else ""
    
    if current_site_url == site_url and current_repo_url == repo_url:
        print("✅ mkdocs.yml is already in sync with config.yml")
        return 0
    
    # Replace site_url
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
    
    with open(mkdocs_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Updated mkdocs.yml:")
    print(f"   site_url: {site_url}")
    print(f"   repo_url: {repo_url}")
    print(f"   repo_name: {repo}")
    
    return 0

if __name__ == "__main__":
    exit(main())
