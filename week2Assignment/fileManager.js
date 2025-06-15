const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    const filePath = path.join(__dirname, 'files', query.filename || '');

    if (!fs.existsSync(path.join(__dirname, 'files'))) {
        fs.mkdirSync(path.join(__dirname, 'files'));
    }

    // Create file
    if (pathname === '/create' && req.method === 'GET') {
        if (!query.filename || !query.content) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            return res.end('Missing filename or content.');
        }

        fs.writeFile(filePath, query.content, (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Error creating file.');
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`File "${query.filename}" created successfully.`);
        });
    }

    // Read file
    else if (pathname === '/read' && req.method === 'GET') {
        if (!query.filename) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            return res.end('Missing filename.');
        }

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('File not found.');
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    }

    // Delete file
    else if (pathname === '/delete' && req.method === 'GET') {
        if (!query.filename) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            return res.end('Missing filename.');
        }

        fs.unlink(filePath, (err) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('File not found or could not be deleted.');
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`File "${query.filename}" deleted successfully.`);
        });
    }

    // Invalid route
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found.');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
