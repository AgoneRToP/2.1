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






