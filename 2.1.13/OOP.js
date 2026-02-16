// class Car{
//     constructor(brend, year){
//         this.brend = brend
//         this.year = year
//     }

//     details(){
//         return `${this.brend} ${this.year} ishlab chiqaringan`
//     }
// }

// const toyota = new Car("Toyota", 2017)
// console.log(toyota.details())

// class NewCar  {
//     constructor(brend, year, color) {

//     }
// }

// ---

// class Turburchak {
//   #_a;
//   #_b;
//   constructor(a, b) {
//     this.#_a = a;
//     this.#_b = b;
//   }
//   area() {
//     return this.#_a * this.#_b;
//   }
// }
// class Kvadrat extends Turburchak {
//   constructor(a) {
//     super(a, a);
//   }
// }

// const rect = new Turburchak(10, 5);
// console.log(rect.area());

// const kvad = new Kvadrat(7);
// console.log(kvad.area());

// ---

class Person {
  #_a;
  constructor(a) {
    this.#_a = a;
  }

  set age(b) {
    if (b <= 0) {
    //   throw new Error("<=0");
    return;
    }
    this.#_a = b;
  }

  get age() {
    return this.#_a;
  }
}

const Human = new Person(3);
console.log(Human.age);
Human.age = -1;
console.log(Human.age);
Human.age = 4;
console.log(Human.age);
