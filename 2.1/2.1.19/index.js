"use strick"

// Array.prototype.myMap = function (cb) {
//     const res = []
//     for (let el of this) {
//         res.push(cb(el))
//     }
//     return res
// }

// const arr = [1,2,3]

// console.log(arr.myMap(e => e * 2))
// console.log(arr.myMap(e => e ** 2))
// console.log(arr.myMap(e => e / 2))
// console.log(arr.myMap(e => e % 2))



// const arr = [4, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1]
// const dct = {}

// for (let index = 0; index < arr.length; index++) {
//     if (!dct[arr[index]]){
//         dct[arr[index]] = 1
//     }
//     else {
//         dct[arr[index]] += 1
//     }
// }

// const arrDct = Object.entries(dct)
// arrDct.sort((a, b) => b[1] - a[1])

// console.log(arrDct)


// function ci(arr) {
//     const myMap = new Map()

//     arr.forEach(el => {
//         if(!myMap.has(el)) myMap.set(el, 1)
//         else myMap.set(el, myMap.get(el) + 1)
//     });

//     const carr = Array.from(myMap)

//     carr.sort((a, b) => b[1] - a[1])

//     return carr
// }

// const arr = [4, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1]

// console.log(ci(arr))



// function tub(arr) {
//     const newArr = Array()
//     for (const value of arr) {
//         count = 0
//         for (let i=1; i<value; i++){
//             if (value%i === 0){
//                 count+=1
//             }
//         }
//         if (count === 1) newArr.push(value)
//     }
//     return newArr
// }

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(tub(arr))



function findIntersection(arr1, arr2){
    return Array.from((new Set(arr1)).intersection((new Set(arr2))))
}

const arr1 = [1, 2, 3, 4]
const arr2 = [3, 4, 5, 6]

console.log(findIntersection(arr1, arr2))