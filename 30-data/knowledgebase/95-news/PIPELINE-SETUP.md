# 🚀 News Feed Pipeline Setup

Automated sync from local server → GitHub for enterprise-grade news publication.

---

## 📌 Overview

```
Local Server (/opt/ri-ecosys/sandbox/30-data/knowledgebase/95-news/)
    ↓ Git Status Check
    ↓ Stage Changes (git add .)
    ↓ Commit with Timestamp
    ↓ Push to GitHub
Public GitHub Repository
    ↓ Google Auto-Index (24–48h)
Global Search Visibility
```

---

## 🔧 Setup Requirements

1. **SSH Key Configured** on Claude Code (iPhone)
   ```bash
   ssh-keygen -t ed25519 -C "your-email@example.com"
   ```

2. **GitHub SSH Key** added to GitHub account
   - Copy public key from `~/.ssh/id_ed25519.pub`
   - Add to GitHub → Settings → SSH Keys

3. **Git Configured**
   ```bash
   git config --global user.name "RI-ECOSYS Team"
   git config --global user.email "team@ri-ecosys.dev"
   ```

4. **Local Repository** initialized at `/opt/ri-ecosys/sandbox/`
   ```bash
   cd /opt/ri-ecosys/sandbox
   git init
   git remote add origin https://github.com/talhyljn1997/iris-x.git
   ```

---

## 📱 Claude Code Auto-Sync Instructions

Copy this entire block into Claude Code on iPhone and run:

```bash
#!/bin/bash
# Auto-Sync News Feed to GitHub

cd /opt/ri-ecosys/sandbox

# Check Git status
git status

# Add all changes
git add .

# Commit with timestamp
git commit -m "News Feed update — $(date '+%Y-%m-%d %H:%M:%S UTC')" || true

# Push to main branch
git push origin main || git push -u origin main

echo "✅ News Feed synced to GitHub"
```

---

## 🔄 Automation Options

### Option 1: Manual Trigger (On-Demand)
Run the script whenever anh Ba adds new news items.

**Command:**
```bash
ssh btran@192.168.1.101 "cd /opt/ri-ecosys/sandbox && git add . && git commit -m 'News update' && git push"
```

---

### Option 2: Scheduled Auto-Sync (Every 10 Minutes)
Add to crontab on local server:

```bash
# Edit crontab
crontab -e

# Add this line:
*/10 * * * * cd /opt/ri-ecosys/sandbox && git add . && git commit -m "Auto-sync $(date '+\%Y-\%m-\%d \%H:\%M:\%S')" && git push origin main 2>/dev/null || true
```

---

### Option 3: Watch-Based Auto-Sync (On File Change)
Install `watchmedo` and add to background:

```bash
pip install watchdog

watchmedo shell-command \
  --patterns="*.md" \
  --recursive \
  --command='cd /opt/ri-ecosys/sandbox && git add . && git commit -m "Auto-sync on change" && git push' \
  /opt/ri-ecosys/sandbox/30-data/knowledgebase/95-news/
```

---

## 📊 Monitoring

### Check Sync Status
```bash
cd /opt/ri-ecosys/sandbox
git log --oneline -10
git status
```

### View GitHub Changes
```bash
gh repo view talhyljn1997/iris-x --web
```

### Monitor Google Indexing
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your repository URL
3. Check "Coverage" → indexed pages
4. Search "RI-ECOSYS news" after 24–48 hours

---

## 🔑 Key Points

✅ **No Manual Upload** — Automatic sync from local server to GitHub  
✅ **Timestamped Commits** — Every change is auditable and dated  
✅ **SEO Optimized** — YYYY-MM-DD naming ensures Google indexes correctly  
✅ **Global Discovery** — News appears in search results within 2 days  
✅ **Zero Friction** — Anh Ba just adds `.md` files, pipeline handles rest

---

## 🚨 Troubleshooting

### Issue: "Permission denied" on SSH
**Fix:** Ensure SSH key is added to GitHub:
```bash
ssh -T git@github.com
# Should output: Hi <username>! You've successfully authenticated...
```

### Issue: "fatal: not a git repository"
**Fix:** Initialize Git on local server:
```bash
cd /opt/ri-ecosys/sandbox
git init
git remote add origin https://github.com/talhyljn1997/iris-x.git
```

### Issue: "nothing to commit"
**Fix:** This is normal if no changes. The script handles it with `|| true`.

---

## 📋 Verification Checklist

- [ ] SSH key configured
- [ ] GitHub remote added to local server
- [ ] First commit pushed successfully
- [ ] GitHub shows new branch/commits
- [ ] Google Search Console linked
- [ ] News items appear in Google Search (check after 48h)

---

**Last Updated:** 2026-06-23  
**Status:** Ready for Production  
**Maintained by:** RI-ECOSYS DevOps
