# Deployment Guide for Triepod.ai

## GitHub Repository Setup
✅ Private repository created: `triepod-ai/triepod-ai`
✅ Local git repository initialized and connected
✅ Codebase pushed to GitHub

## Required GitHub Secrets

To complete the deployment setup, add these secrets in your GitHub repository:

1. Go to: `https://github.com/triepod-ai/triepod-ai/settings/secrets/actions`
2. Add the following secrets:

### SSH Deployment Secrets
- `DEPLOY_SSH_KEY`: Private SSH key for accessing fileserver
- `FILESERVER_HOST`: IP address or hostname of your fileserver
- `FILESERVER_USER`: Username for SSH access (likely `bryan`)

### Environment Variables (if needed)
- `DATABASE_URL`: Production database connection string
- `NEXTAUTH_SECRET`: Secret for NextAuth.js
- `OPENAI_API_KEY`: OpenAI API key
- `ANTHROPIC_API_KEY`: Anthropic API key

## SSH Key Setup

Generate SSH key for GitHub Actions:
```bash
ssh-keygen -t ed25519 -C "github-actions@triepod.ai" -f ~/.ssh/triepod_deploy
```

Add public key to fileserver:
```bash
ssh-copy-id -i ~/.ssh/triepod_deploy.pub bryan@fileserver
```

Copy private key content for GitHub secret:
```bash
cat ~/.ssh/triepod_deploy
```

## Workflow Files Created

### `.github/workflows/deploy.yml`
- Triggers on push to main branch
- Builds Next.js application
- Deploys to fileserver via SSH/rsync
- Manages PM2 process

### `.github/workflows/ci.yml`
- Runs on all pushes and PRs
- Linting and type checking
- Build verification

## Deployment Script

`scripts/deploy.sh` - Manual deployment script for fileserver

## Next Steps

1. Add GitHub secrets (SSH key, fileserver details)
2. Test deployment by pushing to main branch
3. Verify site loads at https://triepod.ai
4. Configure nginx proxy manager if needed

## Manual Deployment

To deploy manually:
```bash
ssh bryan@fileserver
cd /var/www/triepod.ai
git pull origin main
npm ci --production
npm run build
pm2 restart triepod-ai
```