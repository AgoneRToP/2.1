let divBox = document.querySelector(".box")

let afterBegin = `<a href="">afterBegin</a>`
let beforeBegin = `<a href="">beforeBegin</a>`
let afterEnd = `<a href="">afterEnd</a>`
let beforeEnd = `<a href="">beforeEnd</a>`

divBox.insertAdjacentHTML("afterBegin", afterBegin)
divBox.insertAdjacentHTML("beforeBegin", beforeBegin)
divBox.insertAdjacentHTML("afterEnd", afterEnd)
divBox.insertAdjacentHTML("beforeEnd", beforeEnd)

let newParagraph = document.createElement("p")
divBox.insertAdjacentElement("afterEnd", newParagraph)
divBox.insertAdjacentText("beforeEnd", "Hello")

divBox = null

afterBegin = null
beforeBegin = null
afterEnd = null
beforeEnd = null

let width = window.innerWidth
let height = window.innerHeight

let browserName = navigator.appName;

let browserVersion = navigator.appVersion;

let userAgent = navigator.userAgent;

let current = location.href;

