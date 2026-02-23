const obj = { name: 'John' };

Object.preventExtensions(obj);

obj.age = 30; // Fails: in strict mode throws a TypeError, otherwise silent
console.log(obj.age); // undefined

delete obj.name; // Works: existing properties can be deleted
console.log(obj.name); // undefined

obj.name = 'Jane'; // Works: existing properties can be modified
console.log(obj.name); // 'Jane'



// const obj = {
//     foo: 42
// }

// Object.seal(obj)
// obj.foo = 33
// console.log(obj.foo)

// delete obj.foo
// console.log(obj.foo)



const user = {
  username: "Alice",
  memberSince: 2020
};

Object.freeze(user);

user.username = "Bob";
user.newProp = "test";
delete user.memberSince;

console.log(user); 