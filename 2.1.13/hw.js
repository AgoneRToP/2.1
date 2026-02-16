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



class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposit successful. New balance: ${this.balance}`);
  }


  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Invalid withdrawal amount.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrawal successful. New balance: ${this.balance}`);
  }
  static difference(acc1, acc2) {
    const diff = Math.abs(acc1.balance - acc2.balance);
    if (acc1.balance < acc2.balance) {
      console.log(`${acc1.owner}ning puli ${acc2.owner}nikidan ${diff}ga kam`);
    } else if (acc1.balance > acc2.balance) {
      console.log(`${acc1.owner}ning puli ${acc2.owner}nikidan ${diff}ga ko'p`);
    } else {
      console.log("Pullar teng");
    }
  }
}


const account1 = new BankAccount("Alice", 1000);
const account2 = new BankAccount("Bob", 1500);

BankAccount.difference(account1, account2);

account1.deposit(500);
account2.withdraw(200);

