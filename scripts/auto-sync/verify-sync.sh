#!/bin/bash
# Sync Verification Script
# Check if desktop → local server sync is working

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  🔍 Desktop ↔ Local Server Sync Verification              ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check 1: Git status
echo "✅ Check 1: Git Status"
git status
echo ""

# Check 2: Branches
echo "✅ Check 2: Available Branches"
git branch -a
echo ""

# Check 3: Recent commits
echo "✅ Check 3: Recent Commits (last 10)"
git log --oneline -10
echo ""

# Check 4: New folders
echo "✅ Check 4: Folder Structure"
echo "Scripts folder:"
ls -la scripts/ 2>/dev/null || echo "   ⚠️ scripts/ not found"
echo ""

echo "News folder:"
ls -la 30-data/knowledgebase/95-news/ 2>/dev/null || echo "   ⚠️ News folder not found"
echo ""

# Check 5: New files
echo "✅ Check 5: Key Files"
for file in DEPLOYMENT-GUIDE.md HYBRID-AUTO-SYNC-SYSTEM.md sitemap.xml robots.txt; do
    if [ -f "$file" ]; then
        echo "   ✅ $file ($(wc -l < $file) lines)"
    else
        echo "   ❌ $file NOT FOUND"
    fi
done
echo ""

# Check 6: Git remote
echo "✅ Check 6: Git Remote"
git remote -v
echo ""

# Check 7: Current branch
echo "✅ Check 7: Current Branch"
git branch --show-current
echo ""

# Summary
echo "╔════════════════════════════════════════════════════════════╗"
if git status | grep -q "Your branch is up to date"; then
    echo "║  ✅ SYNC COMPLETE - Local server is up to date           ║"
else
    echo "║  ⚠️ SYNC PENDING - Need to pull latest changes           ║"
fi
echo "╚════════════════════════════════════════════════════════════╝"
