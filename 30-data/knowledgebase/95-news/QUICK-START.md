# ⚡ News Feed Pipeline — Quick Start (5 Minutes)

**Goal:** Get RI-ECOSYS News Feed syncing to GitHub automatically.

---

## 🎯 Step 1: Verify Local Server Setup (2 min)

SSH vào local server:

```bash
ssh btran@192.168.1.101
cd /opt/ri-ecosys/sandbox
```

---

## 🎯 Step 2: Initialize Git Repository (1 min)

```bash
git init
git config user.name "RI-ECOSYS Team"
git config user.email "team@ri-ecosys.dev"
git remote add origin https://github.com/talhyljn1997/iris-x.git
```

---

## 🎯 Step 3: Add & Commit (1 min)

```bash
git add .
git commit -m "Initial RI-ECOSYS ecosystem commit"
git branch -M main
git push -u origin main
```

---

## 🎯 Step 4: Add Automatic Sync (1 min)

Add to crontab (runs every 10 minutes):

```bash
crontab -e

# Add this line:
*/10 * * * * cd /opt/ri-ecosys/sandbox && git add . && git commit -m "Auto-sync $(date '+\%Y-\%m-\%d \%H:\%M:\%S')" && git push origin main 2>/dev/null || true
```

---

## ✅ Verification

Check if working:

```bash
cd /opt/ri-ecosys/sandbox
git log --oneline -5
```

Should show recent commits with timestamps.

---

## 🌐 Google Indexing

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add GitHub repo URL
3. Wait 24–48 hours
4. Search "RI-ECOSYS" or specific news titles

---

## 📝 Adding News

That's it! Now whenever anh Ba:

1. Creates a new file in `/30-data/knowledgebase/95-news/2026-MM-DD-title.md`
2. Auto-sync runs every 10 minutes
3. Changes appear on GitHub within 10 minutes
4. Google indexes within 24–48 hours
5. News is discoverable globally

---

## 🔗 Full Documentation

Detailed setup & troubleshooting: [PIPELINE-SETUP.md](./PIPELINE-SETUP.md)

---

**Time to Deploy:** 5 minutes  
**Maintenance:** Zero (fully automatic)  
**Global Reach:** Unlimited
