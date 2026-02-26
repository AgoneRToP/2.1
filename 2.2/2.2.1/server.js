const http = require("node:http")

const server = http.createServer((req, res) => {
    console.log("Уведомление")

    const method = req.method
    const urls = req.url.split("/")

    if (urls[1] === "todos"){
        if (urls[2]){
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(`${urls[2]} - todo!`)
            return
        }
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end("All todos!")
        return
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Привет\nHi\nSalom")
})

const PORT = 6263
server.listen(PORT, () =>{
    console.log("Server is running on:", PORT)
})