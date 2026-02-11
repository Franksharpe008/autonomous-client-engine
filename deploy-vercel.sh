#!/bin/bash

# Deploy to Vercel automatically
# Usage: ./deploy-vercel.sh <business-name>

BUSINESS_NAME=${1:-"demo-mockup"}
LATEST_MOCKUP=$(ls -t mockups/*.html | head -1)

echo "🚀 Deploying to Vercel..."
echo "Business: $BUSINESS_NAME"
echo "File: $LATEST_MOCKUP"

# Create deployment directory
DEPLOY_DIR="deploy-$BUSINESS_NAME"
mkdir -p "$DEPLOY_DIR"

# Copy and rename
cp "$LATEST_MOCKUP" "$DEPLOY_DIR/index.html"

# Deploy using Vercel CLI
cd "$DEPLOY_DIR"
vercel --prod --yes

echo "✅ Deployed!"
