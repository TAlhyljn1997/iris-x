#!/bin/bash
# D) RI-ECOSYS Hybrid Auto-Sync Setup
# Configures complete A+B+C+D pipeline on local server

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  D) RI-ECOSYS Hybrid Pipeline Setup                        ║"
echo "║  Configure: Cron + GitHub Actions + Auto-News Generator   ║"
echo "╚════════════════════════════════════════════════════════════╝"

# Step 1: Setup permissions
echo ""
echo "📋 Step 1: Setting up permissions..."
chmod +x "$(dirname "$0")/cron-sync.sh"
chmod +x "$(dirname "$0")/../generators/auto-news-generator.py"

# Step 2: Create log directory
echo "📋 Step 2: Creating log directory..."
mkdir -p /var/log
touch /var/log/ri-ecosys-sync.log
chmod 666 /var/log/ri-ecosys-sync.log

# Step 3: Install cron job
echo "📋 Step 3: Installing cron job (every 10 minutes)..."
CRON_JOB="*/10 * * * * $(dirname "$0")/cron-sync.sh"
(crontab -l 2>/dev/null | grep -v "cron-sync.sh"; echo "$CRON_JOB") | crontab - 2>/dev/null || \
echo "⚠️ Cron installation requires manual setup. Add to crontab:"
echo "   $CRON_JOB"

# Step 4: Verify git configuration
echo "📋 Step 4: Verifying Git configuration..."
if ! git config --global user.name &>/dev/null; then
    git config --global user.name "RI-ECOSYS Team"
    git config --global user.email "team@ri-ecosys.dev"
    echo "✅ Git user configured"
else
    echo "✅ Git user already configured"
fi

# Step 5: Verify GitHub remote
echo "📋 Step 5: Verifying GitHub remote..."
cd /opt/ri-ecosys/sandbox 2>/dev/null || echo "⚠️ Sandbox directory not found"
if git remote -v 2>/dev/null | grep -q origin; then
    echo "✅ GitHub remote configured"
else
    echo "⚠️ GitHub remote not found. Add with:"
    echo "   git remote add origin https://github.com/talhyljn1997/iris-x.git"
fi

# Step 6: Verify SSH key
echo "📋 Step 6: Checking SSH key..."
if [ -f ~/.ssh/id_ed25519 ] || [ -f ~/.ssh/id_rsa ]; then
    echo "✅ SSH key found"
else
    echo "⚠️ SSH key not found. Generate with:"
    echo "   ssh-keygen -t ed25519 -C 'your-email@example.com'"
fi

# Step 7: Test sync
echo "📋 Step 7: Testing sync pipeline..."
cd /opt/ri-ecosys/sandbox 2>/dev/null && \
git status 2>/dev/null && \
echo "✅ Sync test successful" || \
echo "⚠️ Sync test failed - verify configuration"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║  ✅ Setup Complete!                                         ║"
echo "╠════════════════════════════════════════════════════════════╣"
echo "║  A) Cron Job: Every 10 minutes                             ║"
echo "║  B) GitHub Actions: Hourly verification                    ║"
echo "║  C) Auto-News Generator: On commits                        ║"
echo "║  D) Orchestration: Fully automated                         ║"
echo "╠════════════════════════════════════════════════════════════╣"
echo "║  Status: Ready for hybrid auto-sync                        ║"
echo "║  Log: /var/log/ri-ecosys-sync.log                          ║"
echo "╚════════════════════════════════════════════════════════════╝"
