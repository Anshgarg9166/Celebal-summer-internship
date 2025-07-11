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

    // to create file
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

    // to read file
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

    // to delete file
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


//To create a file 
//http://localhost:3000/create?filename=note.txt&content=HelloWorld


// to Read a file path is 
//http://localhost:3000/read?filename=note.txt

// to delete a file
//http://localhost:3000/delete?filename=note.txt


