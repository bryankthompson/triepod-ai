#!/bin/bash

# Deploy script for triepod.ai
set -e

echo "🚀 Starting deployment to fileserver..."

# Generate Prisma client and build the application
echo "🔧 Generating Prisma client..."
npx prisma generate

echo "📦 Building application..."
npm run build

# Create deployment directory on fileserver if it doesn't exist
echo "📁 Setting up directory on fileserver..."
ssh bryan@fileserver "mkdir -p /var/www/triepod.ai"

# Rsync the built application
echo "📤 Syncing files to fileserver..."
rsync -avz /home/bryan/_websites/triepod.ai/ bryan@fileserver:/var/www/triepod.ai

echo "✅ Deployment complete!"
echo "📍 Files deployed to: bryan@fileserver:/var/www/triepod.ai"
echo "🔗 Configure nginx proxy manager at: http://fileserver:30081"