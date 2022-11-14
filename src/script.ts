// Type Basics

let names;
names = 'mafia';
names = 'Knight';

console.log(names);

// function

function multiple(a: number, b: number) {
  return a * b;
}

console.log(multiple(5, 9));

//Array

let fruits = ['apple', 'banana', 'orange'];

fruits.push('lemon');

let arrData = [];

arrData.push(1998);
arrData.push('Jabir');

let mixed = ['mafia', 19, true];

mixed.push(false);
mixed.push('king');
// mixed.push({
//   name: 'Gangster', /* cant be work */
// });

console.log(arrData);

console.log(mixed);

// object

let person = {
  name: 'Sarah Knight',
  age: 19,
  job: 'deveoper',
};
person.job = 'Senior Software Engineer';

person.isCountry = 'Munich,German'; // can't not working

console.log(person.job);

// Explicit & Union Types

let a: string;

let b: number;

(a = 'Jabir'), (b = 23);
// normal variable

let s: string | number;

// Array

let aa: (string | number)[] = [];

aa.push('Emmah', 22, false);

let c: {
  name: string;
  age: number;
  job: boolean;
};

// Dynamic Type

let as: any;

as = 5;
as = 'Teen girl';

let aj: any[] = [];
aj.push('bangladesh');

// object

let ae: {
  name: any;
  age: any;
  job: any;
};

ae = {
  name: 'Bangladesh',
};

// How to use Functions

const myFunc = (a: string, b?: string) => {
  console.log(b);
  console.log(a);
};
myFunc('AS', 'coding');
let ownFunc: Function;

// Type Aliases
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`User id is${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? 'sir' : 'mr.'}${user.name}`);
};
