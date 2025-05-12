# Manual Vercel Deployment

This document provides step-by-step instructions for deploying to Vercel using the CLI on your local machine.

## Prerequisites

- Node.js installed on your computer
- Git installed on your computer
- A Vercel account (you can create one at [vercel.com](https://vercel.com))

## Step 1: Prepare your project

Make sure your project has all the necessary configuration:

- The `next.config.js` file is properly configured
- The `vercel.json` file is in your project root
- All dependencies are installed

## Step 2: Install Vercel CLI

Open your terminal and run:

```bash
npm install -g vercel
```

## Step 3: Clone and navigate to your project

```bash
# Clone this repository (if you haven't already)
git clone <repository-url>

# Navigate to the project directory
cd the-growth-md
```

## Step 4: Login to Vercel

```bash
vercel login
```

This will open a browser window where you can authenticate with your Vercel account.

## Step 5: Deploy to Vercel

For a production deployment:

```bash
vercel --prod
```

For a preview deployment:

```bash
vercel
```

## Step 6: Configure deployment settings

The Vercel CLI will prompt you to configure your project:

1. Set up and deploy this project? `y`
2. Which scope to deploy to? `[Select your account or team]`
3. Link to an existing project? `n` (for first-time deployment)
4. What's your project name? `the-growth-md` (or press Enter for default)
5. In which directory is your code located? `./` (or press Enter for current directory)
6. Want to modify these settings? `n` (or `y` to customize build settings)

If you select `y` to customize settings, you'll be asked additional questions:

- Build Command: `npm run build`
- Output Directory: `out`
- Development Command: `npm run dev`

## Step 7: Verify your deployment

After the deployment is complete, Vercel will provide a URL where your project is accessible.

```
✅ Production: https://your-project-name.vercel.app
```

Open this URL in your browser to verify that your site has been deployed correctly.

## Step 8: Set up a custom domain (optional)

To add a custom domain to your deployment:

```bash
vercel domains add your-domain.com
```

Follow the verification instructions provided by Vercel.

## Additional Commands

### View your deployments

```bash
vercel ls
```

### Remove a deployment

```bash
vercel remove your-project-name
```

### Get deployment logs

```bash
vercel logs your-project-name.vercel.app
```

### Pull environment variables from Vercel

```bash
vercel env pull
```

## Troubleshooting

If you encounter any issues during deployment:

1. Check the Vercel logs with `vercel logs`
2. Verify that your project builds locally with `npm run build`
3. Ensure all required environment variables are set with `vercel env ls`
4. Check that your `vercel.json` configuration is valid
5. Try deploying with the `--debug` flag: `vercel --debug`

For more help, refer to the [Vercel documentation](https://vercel.com/docs) or contact Vercel support.
