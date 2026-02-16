class Calculator {
  #_Number;

  constructor(number) {
    this.#_Number = number;
  }

  add(value) {
    this.#_Number += value;
    return this;
  }

  subtract(value) {
    this.#_Number -= value;
    return this;
  }

  multiply(value) {
    this.#_Number *= value;
    return this;
  }

  divide(value) {
    this.#_Number /= value;
    return this;
  }

  get getResult() {
    return this.#_Number;
  }
}

const result = new Calculator(10)
  .add(5)
  .subtract(3)
  .multiply(4)
  .divide(2)
  .getResult;

console.log(result);
