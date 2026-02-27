

// function greet(greeting, punctuation) {
//     console.log(greeting + ", " + this.firstName + " " + this.lastName + punctuation)
// }

// const person = {
//     firstName: "John",
//     lastName: "Doe"
// }

// greet.call(person, "Hi", ".")
// greet.apply(person, ["Hi", "."])

// const newGreet = greet.bind(person)
// newGreet("Hi", ".")



// const controller = new AbortController()

// const signal = controller.signal

// const now = new Date()

// const timeoutId = setTimeout(() => controller.abort("So'rov kechikdi"), 300)

// fetch("https://jsonplaceholder.typicode.com/todos", {
//     method: "GET",
//     signal
// })
//     .then((res) => res.json())
//     .then((data) => {
//         // clearTimeout(timeoutId);
//         const current = new Date()
//         console.log("TIME DIFF:", current - now);
//         console.log(data)
//     })
//     .catch((err) => console.log(err))



// const number = [1, 2, 3, 4]

// const anoterNumber = [...number, 5, 6, 7, 8]
// console.log(anoterNumber)

// const obj = {brend: "Chevrolet"}

// const car = {
//     ...obj,
//     model: "Malibu"
// }

// console.log(car)

// function add(a, b, ...rest) {
//     console.log(a, b, rest)
// }

// add(1, 2, 3, 4, 5, 6, 7, 8)

// function dummy({brend, ...obj}) {
//     console.log(brend, obj)
// }

// dummy(car)

