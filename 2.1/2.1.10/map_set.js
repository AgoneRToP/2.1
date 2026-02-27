// const MySet = new Set()

// MySet.add(12)
// MySet.add([32, 43, 5])
// MySet.add("sf")
// MySet.add({name: "fe"})


// // console.log(MySet)

// MySet.delete("sf")
// MySet.delete([32, 43, 5])

// // console.log(MySet)

// for (let el of MySet){
//     // console.log(el)
// }

// const MyArr = Array.from(MySet)

// console.log(MyArr)

// const ThisSet = new Set(MyArr)

// console.log(ThisSet)

// const FUE = (a) => Array.from(new Set(a))
// const FUEWS = (a) => {
//     let b = []
//     for (let i of a){
//         if (!b.includes(i)) b.push(i)
//     }
//     return b
// }

// const ar = [1, 1, 1, 2, 2, 2, 3]

// arse = FUE(ar)
// arwse = FUEWS(ar)

// console.log(ar)
// console.log(arse)
// console.log(arwse)





const arr = [1, 2, 2, 3, 4, 4, 5]
const stt = new Set(arr)
const tts = new Set([1, 2, 3])

const sumOfSquares = (arr) => {
    return arr.reduce((sum, num) => sum + num ** 2);
};

const removeDuplicates = (arr) => {
    return [...new Set(arr)];
};

const countOccurrences = (arr) => {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
};

const findMissingNumber = (arr, n) => {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num);
    return expectedSum - actualSum;
};

const compact = (arr) => {
    return arr.filter(Boolean);
};

console.log(sumOfSquares(arr));
console.log(removeDuplicates(arr));
console.log(countOccurrences(arr));
console.log(findMissingNumber(arr, 5));
console.log(compact([0, 1, false, 2, "", 3, NaN]));
console.log(stt.intersection(tts));
console.log(stt.difference(tts));