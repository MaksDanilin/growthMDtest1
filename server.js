const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3002; // Changed from 3000 to 3002
const BASE_DIR = path.join(__dirname, 'out');

// Mime types for serving different file types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf'
};

const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url);

  // Normalize the path and resolve it to the file in the out directory
  let pathname = path.normalize(parsedUrl.pathname);

  // Handle root path or page paths (like /about)
  if (pathname === '/' || !path.extname(pathname)) {
    // Check if pathname has a trailing slash and remove it
    if (pathname.endsWith('/') && pathname !== '/') {
      pathname = pathname.slice(0, -1);
    }

    // First, try to serve the HTML file directly
    const htmlPath = path.join(BASE_DIR, pathname, 'index.html');

    // If pathname is not root and doesn't have an index.html, try pathname.html
    if (pathname !== '/' && !fs.existsSync(htmlPath)) {
      pathname = pathname + '.html';
    } else {
      pathname = path.join(pathname, 'index.html');
    }
  }

  // Resolve the file path
  const filePath = path.join(BASE_DIR, pathname);

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // If page not found, try to serve 404.html
      const notFoundPath = path.join(BASE_DIR, '404.html');
      fs.access(notFoundPath, fs.constants.F_OK, (err404) => {
        if (err404) {
          // If even 404.html doesn't exist, return a simple 404 message
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          return;
        }

        // Serve the 404 page
        const fileStream = fs.createReadStream(notFoundPath);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fileStream.pipe(res);
      });
      return;
    }

    // Get the file extension
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Create a read stream to serve the file
    const fileStream = fs.createReadStream(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    fileStream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
