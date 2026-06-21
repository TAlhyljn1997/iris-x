#!/bin/bash
# A) RI-ECOSYS Auto-Sync Cron Job
# Runs every 10 minutes on local server (192.168.1.101)
# Syncs changes from sandbox to GitHub automatically

set -e

# Configuration
REPO_PATH="/opt/ri-ecosys/sandbox"
GITHUB_REPO="https://github.com/talhyljn1997/iris-x.git"
BRANCH="main"
LOG_FILE="/var/log/ri-ecosys-sync.log"

# Timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S UTC')
echo "[$TIMESTAMP] Auto-sync started" >> "$LOG_FILE"

# Navigate to repo
cd "$REPO_PATH" || exit 1

# Check if git repo exists
if [ ! -d ".git" ]; then
    echo "[$TIMESTAMP] Initializing git repository" >> "$LOG_FILE"
    git init
    git remote add origin "$GITHUB_REPO"
    git branch -M "$BRANCH"
fi

# Stage all changes
git add . 2>/dev/null || true

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "[$TIMESTAMP] No changes to sync" >> "$LOG_FILE"
    exit 0
fi

# Commit with timestamp
git commit -m "Auto-sync RI-ECOSYS sandbox — $TIMESTAMP" 2>/dev/null || true

# Push to GitHub
if git push -u origin "$BRANCH" 2>/dev/null; then
    echo "[$TIMESTAMP] ✅ Sync successful" >> "$LOG_FILE"
else
    echo "[$TIMESTAMP] ⚠️ Sync failed - retrying..." >> "$LOG_FILE"
    # Retry with exponential backoff
    sleep 2
    git push -u origin "$BRANCH" 2>/dev/null || \
    (sleep 4 && git push -u origin "$BRANCH" 2>/dev/null) || \
    (sleep 8 && git push -u origin "$BRANCH" 2>/dev/null) || \
    echo "[$TIMESTAMP] ❌ Sync failed after retries" >> "$LOG_FILE"
fi

echo "[$TIMESTAMP] Auto-sync completed" >> "$LOG_FILE"
