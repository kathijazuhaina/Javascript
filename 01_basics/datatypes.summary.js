// Primitive Datatypes (Call By Value)

//7 types: String, Number, Boolean, null, undefined, Symbol, Bigint

const score=100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 2435465768794567n;
console.log(typeof bigNumber);

//Non-Primitive (Reference)

//Array, Objects, Functions

const fruits = ["lychee", "mango", "apple"];
console.log(fruits);

let myObj = {
    name: "Strawberry",
    color: "pink",
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello World!");
}
console.log(myFunction);

console.log(typeof myFunction);  //function
console.log(typeof myObj);       //object
console.log(typeof fruits);      //object

