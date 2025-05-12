# The Growth MD

A Next.js website for behavioral health facility growth solutions.

## Deployment Options

### Option 1: Deploy to Vercel with GitHub (Recommended)

The easiest way to deploy this project is directly through Vercel's GitHub integration:

1. Commit and push your project to a GitHub repository
2. Visit [https://vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel will automatically detect the Next.js project and configure settings
5. Click "Deploy" and your site will be live in minutes

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourepo%2Fthe-growth-md)

### Option 2: Manual Deployment with CLI

If you prefer using the command line, we've included a deployment script:

```bash
# Make the script executable (if needed)
chmod +x deploy-vercel.sh

# Run the deployment script
./deploy-vercel.sh
```

This script will:
1. Install the Vercel CLI if not already installed
2. Guide you through logging in to Vercel
3. Deploy your project to production

## Development

This is a Next.js project bootstrapped with ShadCN UI components.

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
