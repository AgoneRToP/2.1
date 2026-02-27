const http = require("node:http")
const fs = require("node:fs");

const PORT = 9876

const data = JSON.parse(
    fs.readFileSync("./tasks.json", { encoding: "utf-8" }),
);

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json;", "charset=utf-8")
    res.statusCode = 200


    const method = req.method;
    const urls = req.url?.split("/");

    if (method === "GET") {
        if (urls[1] === "tasks") {
            if (urls[2]) {
                const id = urls[2]

            const task = data.find((el) => el.id == id)
                if (!task) {
                    res.statusCode = 404
                    res.end(
                        JSON.stringify({
                            success: false,
                            message: `Этот ID: ${id} не найдено`
                        })
                    )
                    return
                }

                res.end(
                    JSON.stringify({
                        success: true,
                        data: task
                    })
                )
                return
            }

            res.end(
                JSON.stringify({
                    success: true,
                    data
                })
            )
            return
        }
    }
    if (method === "DELETE") {
        if (urls[1] === "tasks" && urls[2]) {
            const id = urls[2];
            
            const taskIndex = data.findIndex((el) => el.id == id);

            if (taskIndex === -1) {
                res.statusCode = 404;
                return res.end(JSON.stringify({
                    success: false,
                    message: `ID: ${id} не найден`
                }));
            }

            data.splice(taskIndex, 1);

            try {
                fs.writeFileSync("./tasks.json", JSON.stringify(data, null, 2), "utf-8");
                
                res.end(JSON.stringify({
                    success: true,
                    message: `Задача с ID: ${id} успешно удалена`
                }));
            } catch (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({
                    success: false,
                    message: "Ошибка при сохранении в файл"
                }));
            }
            return;
        }
    }
})

server.listen(PORT, () => {
    console.log(`Порт сервера ${PORT}`)
})