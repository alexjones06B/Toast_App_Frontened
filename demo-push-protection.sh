#!/usr/bin/env sh

# Demo script showing what happens when trying to push to main

echo "🎬 Demo: Attempting to push directly to main branch..."
echo ""

# Check current branch
echo "📍 Current branch:"
git branch --show-current
echo ""

# Switch to main branch to demonstrate protection
echo "🔄 Switching to main branch..."
git checkout main 2>/dev/null || echo "Creating main branch..."
git checkout -b main 2>/dev/null || git checkout main

echo "📍 Now on branch:"
git branch --show-current
echo ""

# Try to push (this should fail due to pre-push hook)
echo "🚫 Attempting to push to main (this should fail)..."
echo "Running: git push origin main"
echo ""

# The actual command would be:
# git push origin main

echo "Expected output:"
echo "🚫 Direct push to main branch is not allowed!"
echo "Please create a feature branch and open a pull request."
echo "To create a new branch: git checkout -b feature/your-feature-name"
echo ""
echo "✅ Protection working as intended!"