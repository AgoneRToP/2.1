const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    fs.readFile('./tasks.json', 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ error: "Faylni o'qishda xato!" }));
        }

        const tasks = JSON.parse(data);

        if (req.url === '/tasks' && req.method === 'GET') {
            res.end(data);
        } 
        
        else if (req.url.startsWith('/tasks/') && req.method === 'GET') {
            const id = parseInt(req.url.split('/')[2]);
            const task = tasks.find(t => t.id === id);

            if (task) {
                res.end(JSON.stringify(task));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: "Task topilmadi" }));
            }
        } 
        
        else {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: "Sahifa topilmadi" }));
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} portida ishlamoqda...`);
});
