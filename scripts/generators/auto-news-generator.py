#!/usr/bin/env python3
"""
C) RI-ECOSYS Auto-News Generator
Automatically creates news articles from git commits and activity logs
"""

import os
import json
import subprocess
from datetime import datetime

def get_latest_commits(count=10):
    """Get latest git commits"""
    try:
        result = subprocess.run(
            ['git', 'log', f'--max-count={count}', '--pretty=format:%H|%an|%s|%b|%ai'],
            cwd=os.getcwd(),
            capture_output=True,
            text=True
        )
        commits = []
        for line in result.stdout.strip().split('\n'):
            if line:
                parts = line.split('|')
                commits.append({
                    'hash': parts[0],
                    'author': parts[1],
                    'subject': parts[2],
                    'body': parts[3] if len(parts) > 3 else '',
                    'date': parts[4] if len(parts) > 4 else ''
                })
        return commits
    except Exception as e:
        print(f"❌ Error getting commits: {e}")
        return []

def parse_activity_log(log_path='/var/log/ri-ecosys-sync.log'):
    """Parse activity log"""
    activities = []
    if os.path.exists(log_path):
        try:
            with open(log_path, 'r') as f:
                for line in f.readlines()[-20:]:  # Last 20 lines
                    if 'Auto-sync' in line or 'sync' in line:
                        activities.append(line.strip())
        except Exception as e:
            print(f"⚠️ Could not read activity log: {e}")
    return activities

def generate_news_article(commit, activity_type="system-update"):
    """Generate news article from commit"""

    timestamp = datetime.now().strftime('%Y-%m-%d')

    # Parse commit date to YYYY-MM-DD
    try:
        commit_date = commit['date'].split()[0]
    except:
        commit_date = timestamp

    # Generate slug from subject
    slug = commit['subject'].lower()
    slug = ''.join(c if c.isalnum() or c == ' ' else '' for c in slug)
    slug = '-'.join(slug.split())[:50]

    filename = f"{commit_date}-ri-ecosys-{slug}.md"
    filepath = f"30-data/knowledgebase/95-news/{filename}"

    # Skip if already exists
    if os.path.exists(filepath):
        print(f"⏭️  Skipping {filename} (already exists)")
        return None

    # Generate JSON-LD
    jsonld = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": commit['subject'],
        "description": commit['body'] or commit['subject'],
        "datePublished": f"{commit_date}T00:00:00Z",
        "author": {
            "@type": "Organization",
            "name": "RI-ECOSYS Team"
        },
        "keywords": "RI-ECOSYS, ResontoLogic, AI-balanced, enterprise, ecosystem",
        "articleSection": "Updates"
    }

    # Generate markdown
    content = f"""<!-- JSON-LD Structured Data for Search Engines -->
<script type="application/ld+json">
{json.dumps(jsonld, indent=2)}
</script>

# 📰 {commit['subject']}

**Date:** {commit_date}
**Category:** {activity_type}
**Author:** RI-ECOSYS Team
**Status:** Auto-Generated

---

## 🔥 Summary

{commit['body'] or commit['subject']}

---

## 📌 Key Points

- Auto-generated from system activity
- Commit: `{commit['hash'][:8]}`
- Timestamp: {datetime.now().isoformat()}

---

## 🌍 Impact

This update was automatically detected and published to keep the community informed of RI-ECOSYS changes.

---

**Tags:** #ri-ecosys #auto-generated #news
"""

    return {
        'filename': filename,
        'filepath': filepath,
        'content': content
    }

def main():
    print("🚀 C) RI-ECOSYS Auto-News Generator")
    print("=" * 50)

    # Get latest commits
    print("\n📝 Scanning recent commits...")
    commits = get_latest_commits(5)

    if not commits:
        print("⚠️ No commits found")
        return

    # Get activity log
    print("📊 Scanning activity log...")
    activities = parse_activity_log()

    # Generate news articles
    print(f"\n📰 Generating news from {len(commits)} recent commits...")
    generated_count = 0

    for commit in commits:
        news = generate_news_article(commit)
        if news:
            try:
                os.makedirs(os.path.dirname(news['filepath']), exist_ok=True)
                with open(news['filepath'], 'w') as f:
                    f.write(news['content'])
                print(f"✅ Created: {news['filename']}")
                generated_count += 1
            except Exception as e:
                print(f"❌ Error creating {news['filename']}: {e}")

    print(f"\n✅ Generated {generated_count} new articles")
    print("📊 Summary:")
    print(f"   • Latest commits: {len(commits)}")
    print(f"   • Activity logs: {len(activities)}")
    print(f"   • News generated: {generated_count}")
    print("\n🎯 Auto-generated news will be auto-synced to GitHub within 10 minutes")

if __name__ == '__main__':
    main()
