# Deployment Guide

## GitHub Repository

The landing page has been pushed to the `landing-page` branch:
- Repository: https://github.com/Prabuddha747/Zynpy
- Branch: `landing-page`

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import the repository: `Prabuddha747/Zynpy`
4. Select the `landing-page` branch
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project directory
cd /Users/prabuddhaverma/StudioProjects/zynpy/landingPage

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? zynpy-landing-page (or your preferred name)
# - Directory? ./
# - Override settings? No
```

### Option 3: Deploy via GitHub Integration

1. Connect your GitHub account to Vercel
2. Vercel will automatically detect the `landing-page` branch
3. Configure build settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Deploy

## Environment Variables

No environment variables are required for this project.

## Post-Deployment

After deployment, Vercel will provide you with:
- A production URL (e.g., `zynpy-landing-page.vercel.app`)
- Automatic HTTPS
- Global CDN distribution

## Custom Domain (Optional)

To add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Continuous Deployment

Vercel automatically deploys:
- Every push to the `landing-page` branch
- Pull requests get preview deployments

## Build Configuration

The project uses the following build settings (already configured in `vercel.json`):
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite

