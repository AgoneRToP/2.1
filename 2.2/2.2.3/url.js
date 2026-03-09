// const { URL } = require("node:url")

// const testUrl = "https://restcountries.com/v3.1/all?fields=name#hash"

// const url = new URL(testUrl)

// console.log(url.hash)
// console.log(url.host)
// console.log(url.hostname)
// console.log(url.href)
// console.log(url.origin)
// console.log(url.password)
// console.log(url.pathname)
// console.log(url.port)
// console.log(url.protocol)
// console.log(url.search)
// console.log(url.searchParams)
// console.log(url.toJSON())
// console.log(url.toString())
// console.log(url.username)

// const console = require("node:console")
// const path = require("node:path")

// const filePath = "../2.2.2/folders/folder-1/folder-2/folder-3/folder3.js"

// console.log(path.basename(filePath))
// console.log(path.dirname(filePath))
// console.log(path.extname(filePath))

// const dirname = "/2.2.2/folders/folder-1/folder-2/folder-3"
// const fileName = "folder3.js"

// console.log(path.join(dirname, fileName))

// console.log(path.resolve("2.2.2/folders/folder-1/folder-2/folder-3/folder3.js"))

// console.log(path.isAbsolute("C:/Users/ali/Desktop/2.1/2.2/2.2.3/2.2.2/folders/folder-1/folder-2/folder-3/folder3.js"))
// console.log(path.isAbsolute("2.2.2/folders/folder-1/folder-2/folder-3"))

// const from = "/2.2.2/animalsay"
// const to = "/2.2.2/server"

// console.log(path.relative(from, to))

const { EventEmitter } = require("node:events")

const eventEmitter = new EventEmitter()

eventEmitter.on("click", (name) => {
    console.log("clicked!", name)
})

const listenFn = () => {
    console.log("Clicked second!")
}

eventEmitter.emit("click")

eventEmitter.addListener("click", listenFn)

eventEmitter.emit("click")

eventEmitter.removeListener("click", listenFn)

eventEmitter.emit("click", "test")
eventEmitter.emit("click")

eventEmitter.once("birmarta", () => {
    console.log("Bir marta ishlaydi")
})

eventEmitter.emit("birmarta")
eventEmitter.emit("birmarta")
eventEmitter.emit("birmarta")
eventEmitter.emit("birmarta")