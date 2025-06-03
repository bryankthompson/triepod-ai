#!/bin/bash

# Triepod.ai Deployment Script
set -e

DEPLOY_DIR="/var/www/triepod.ai"
BACKUP_DIR="/var/backups/triepod.ai"
DATE=$(date +%Y%m%d_%H%M%S)

echo "🚀 Starting deployment of triepod.ai..."

# Create backup of current deployment
if [ -d "$DEPLOY_DIR" ]; then
    echo "📦 Creating backup..."
    sudo mkdir -p "$BACKUP_DIR"
    sudo cp -r "$DEPLOY_DIR" "$BACKUP_DIR/backup_$DATE"
fi

# Ensure deployment directory exists
sudo mkdir -p "$DEPLOY_DIR"

# Install dependencies if package.json exists
if [ -f "$DEPLOY_DIR/package.json" ]; then
    echo "📥 Installing dependencies..."
    cd "$DEPLOY_DIR"
    npm ci --production
fi

# Build the application
echo "🔨 Building application..."
npm run build

# Set proper permissions
echo "🔐 Setting permissions..."
sudo chown -R www-data:www-data "$DEPLOY_DIR"
sudo chmod -R 755 "$DEPLOY_DIR"

# Restart services
echo "🔄 Restarting services..."
if command -v pm2 &> /dev/null; then
    pm2 restart triepod-ai || pm2 start npm --name triepod-ai -- start
fi

# Restart nginx if needed
if command -v nginx &> /dev/null; then
    sudo nginx -t && sudo systemctl reload nginx
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Site should be available at https://triepod.ai"