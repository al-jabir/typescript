"use strict";
// Type Basics
let names;
names = 'mafia';
names = 'Knight';
console.log(names);
// function
function multiple(a, b) {
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
