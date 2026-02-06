// function plus(a, b, c){
//     return a + b + c;
// }

// function minus(a, b, c){
//     return a - b - c;
// }

// function umn(a, b, c){
//     return a * b * c;
// }

// function dele(a, b, c){
//     return a / b / c;
// }

// console.log(plus(1, 2, 3))
// console.log(minus(7, 4, 1))
// console.log(umn(4, 5, 4))
// console.log(dele(12, 2, 6))

// let daraja = function(a, b, c){
//     return a**b**c
// }

// console.log(daraja(2, 2, 2))



// function sum(a, b){
//     return a+b
// }

// console.log(sum(5, 5))

// function pm(a){
//     if(a>0){console.log("Положительный")}
//     else if(a<0){console.log("Отрицательный")}
//     else{console.log("Нулевой")}
// }

// pm(+(prompt("2ая-задания")))

// function age(a){
//     if(a>=18){console.log("Можно голосовать")}
//     else{console.log("Нельзя голосовать")}
// }

// age(+(prompt("3ие-задание")))

// function max(a, b, c){
//     if(a>b && a>c){return a}
//     else if(b>c){return b}
//     else{return c}
// }

// console.log("Макс -> "+max(12, 7, 3))

// function sec(a){
//     return a*60
// }

// console.log(sec(parseInt(prompt("5ая-задания"))))






// function jt(n, j, t){
//     if(n%2){t(n)}
//     else{j(n)}
// }

// function juft(s){
//     console.log("juft " + s)
// }

// function toq(s){
//     console.log("toq " + s)
// }

// jt(6, juft, toq)


// function check_number(n, mus, man, nol){
//     if(n>0){mus(n)}
//     else if(n<0){man(n)}
//     else{nol(n)}
// }

// function musbat(s){console.log("musbat "+ s)}
// function manfiy(s){console.log("mansiy "+ s)}
// function noll(s){console.log("noll "+ s)}

// check_number(5, musbat, manfiy, noll)
// check_number(-9, musbat, manfiy, noll)
// check_number(0, musbat, manfiy, noll)



// function check_password(n, err, suc){
//     if(n.length>=8){suc()}
//     else{err()}
// }

// function error(){console.log("Ошибка")};
// function success(){console.log("Принято")};

// check_password("2[3re43", error, success)
// check_password("hf43e$@i", error, success)



// for(let i=1; i<=5; jt(i, juft, toq), i++);



// function day(n, j, w){
//     if(n%7){j(n)}
//     else{w(n)}
// }

// function job(s){console.log(s + " - день работы")}
// function week(s){console.log(s + " - день отдыха")}

// for(let i=1; i<=31; day(i, job, week), i++);





// function AreaOfRecrangle(w, h){
//     alert(w * h)
// }

// AreaOfRecrangle(5, 10)



// function Palindrom(a){
//     s=""
//     for(let i=a.length; i; i--, s+=a[i]);

//     if(a==s){console.log("Палиндром")}
//     else{console.log("Не полиндром")}
// }

// Palindrom(prompt(">>>"))



// function Fahrenheit(C){alert(C+32 + " Fahrenheit")}

// Fahrenheit(+(prompt("Celsius...")))



// function CharacterCount(a){alert(a.length)}

// CharacterCount(prompt(">>>"))



// function SquareOfANumber(a){alert(a**2)}

// SquareOfANumber(+(prompt(">>>")))



// const CubeOfANumber = x => x**3
// alert(CubeOfANumber(+prompt(">>>")))



// const EvenOrOdd = x => {
//     if(x%2){toq(x)}
//     else{juft(x)}
// }
// EvenOrOdd(parseInt(prompt(">>>")))



// const FilterPositiveNumber = x => {
//     let s = [], v = 0
//     for (let i = 0; i<x.length; i++){
//         if (x[i]>0){
//             s[v] = x[i]
//             v++
//         }
//     }
//     return s
// }

// const a = [-2, 5, -1, 7, 0]

// console.log(a)
// console.log(FilterPositiveNumber(a))



// const LongestWordLength = x => {
//     let s = ""
//     for(let i=0; i<x.length; i++){
//         if (s.length<x[i].length){
//             s = x[i]
//         }
//     }
//     console.log(s.length)
// }

// LongestWordLength(["apple", "banana", "kiwi"])

// const Add10ProcentTax = x => x + (x * 0.10);
// alert(Add10ProcentTax(+(prompt(">>>"))))



// function ApplyCallbackToNumber (a, square){square(a)}

// ApplyCallbackToNumber(+(prompt(">>>")), SquareOfANumber)



// function GrettingWitnCallback (a, greet){greet(a)}
// function Hello (s){alert(`Привет, ${s}!`)}

// GrettingWitnCallback(prompt("Имя..."), Hello)



// function FilterArrayWithCallback (a, j){
//     let s=[], v=0
//     for(let i=0; i<a.length; i++){
//         if(j(a[i])){
//             s[v] = a[i]
//             v++
//         }
//     }
//     console.log(s)
// }
// function Juft (s){
//     if(s%2==0){
//         return s
//     }
//     return false
// }

// a = [45, 7, -84, 6, 0, 32]
// console.log(a)
// FilterArrayWithCallback(a, Juft)



// const ShoppingCosttWithDiscount = x => x-(x * 0.10)
// alert(ShoppingCosttWithDiscount(+(prompt(">>>"))))



// function PassFail (a){
//     if (a>=60){return "Pass"}
//     else {return "Fail"}
// }

// alert(PassFail(+(prompt(">>>"))))



// const OrderProcessing = x => `Order #${x} completed`
// console.log(OrderProcessing(+(prompt(">>>"))))