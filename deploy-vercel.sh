#!/bin/bash

echo "=== Vercel Deployment Script ==="
echo "This script will help you deploy your Next.js project to Vercel."
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "Vercel CLI is not installed. Installing now..."
    npm install -g vercel
fi

echo "=== Project Configuration ==="
echo "Making sure your project is configured correctly for Vercel deployment..."

# Step 1: Login to Vercel
echo ""
echo "=== Step 1: Login to Vercel ==="
echo "You'll need to login to Vercel. If you don't have an account, you can create one during this process."
echo "Press Enter to continue with login..."
read -p ""
vercel login

# Step 2: Deploy to Vercel
echo ""
echo "=== Step 2: Deploy to Vercel ==="
echo "Deploying your project to Vercel. This will create a new project if one doesn't exist yet."
echo "Press Enter to continue with deployment..."
read -p ""
vercel deploy --prod

echo ""
echo "=== Deployment Complete ==="
echo "Your site should now be deployed to Vercel! Check the URL above for your live site."
echo "You can manage your deployment from the Vercel dashboard."
