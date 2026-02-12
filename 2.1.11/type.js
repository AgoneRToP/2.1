// function createCounter() {
//   let count = 0;

//   return {
//     increment: function () {
//       return ++count;
//     },
//     decrement: function () {
//       return --count;
//     },
//   };
// }

// const counter = createCounter();

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());

// function Math(a, b, c) {
//   return {
//     Sum: function () {
//       return a + b + c;
//     },
//     Cal: function () {
//       return a * b * c;
//     },
//   };
// }

// const num = Math(2, 3, 4);

// console.log(num.Sum());
// console.log(num.Cal());

function Massiv(a) {
  return {
    JuftSum: function () {
      let Sum = 0;
      for (let i = 0; i < a.length; i += 2) {
        Sum += a[i];
      }
      return Sum;
    },
    Reverse: function () {
      return a.reverse();
    },
    isPrime(c = a) {
      return c.filter((v) => {
        if (v < 2) return false;
        for (let i = 2; i <= Math.sqrt(v); i++) {
          if (v % i === 0) return false;
        }
        return true;
      });
    },
    Max: function () {
      return Math.max(...a);
    },
    Min: function () {
      return Math.min(...a);
    },
    MaxTwo: function () {
      const sorted = [...a].sort((x, y) => y - x);
      return [sorted[0], sorted[1]];
    },
    MinTwo: function () {
      const sorted = [...a].sort((x, y) => x - y);
      return [sorted[0], sorted[1]];
    },
    MaxMin: function () {
      return [this.Max(), this.Min()];
    },
    Prime: function () {
      return this.isPrime().length;
    },
  };
}

const Aray1 = [2, 5, 4, 3, 6, 7, 1, 0, 9, 8];
const arr = Massiv(Aray1);

console.log(arr.JuftSum());
console.log(arr.Reverse());
console.log(arr.isPrime());
console.log(arr.Max());
console.log(arr.Min());
console.log(arr.MaxTwo());
console.log(arr.MinTwo());
console.log(arr.MaxMin());
console.log(arr.Prime());

function printObject(obj) {
  for (let key in obj) {
    console.log(key + ":", obj[key]);
  }
}

printObject({ name: "Ali", age: 20 });

const mathObj = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  power: (a, b) => a ** b,
  sqrt: (a) => Math.sqrt(a),
  nthRoot: (a, n) => Math.pow(a, 1 / n),
  IsPrime: (n) => arr.isPrime([n]).length > 0,
};

console.log(mathObj.IsPrime(9));
