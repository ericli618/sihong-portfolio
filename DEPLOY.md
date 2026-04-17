# Deploy sihong.ca to Vercel

## Prerequisites
- Create a new Vercel account at vercel.com (separate from ship.compare)
- Install Vercel CLI: npm install -g vercel

## Deploy (3 commands)

```bash
cd ~/Desktop/work\ hunt\ 2026/sihong-portfolio
npm install
vercel
```

Follow the prompts:
- Set up and deploy? Y
- Which scope? Select your new account
- Link to existing project? N
- Project name: sihong-portfolio
- Directory: ./
- Override settings? N

It will build and deploy. You'll get a URL like: https://sihong-portfolio-xxxx.vercel.app

## Custom domain

After first deploy:
1. Go to vercel.com → your project → Settings → Domains
2. Add sihong.ca
3. Update your DNS: point sihong.ca to Vercel's DNS (they'll show you the records)
4. Remove the old Squarespace/Webflow DNS records

## Canvas demo

The password-protected demo is at /demo/canvas
Password: pipeline2026

Currently shows a placeholder iframe. To embed the real prototype:
1. Deploy the canvas prototype to Firebase (instructions in review-pipeline-demo/DEPLOY.md)
2. Update app/demo/canvas/page.tsx line with the iframe src to your Firebase URL

## Site structure

```
/ ........................... Homepage (name card + project list)
/projects/review-pipeline-canvas ... Canvas AI agent case study
/projects/smartaction-builder ...... VHA $70.4M case study
/projects/modern-message-viewer .... Unified message viewer case study
/demo/canvas .................... Password-protected prototype demo
```
