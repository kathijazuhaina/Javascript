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

//************************************************************************* 

//Stack Memory (Primitive)

let myYoutubename = "Zuhaina"
let anotherName = myYoutubename
anotherName = "Kathija"

console.log(anotherName);
console.log(myYoutubename); 

//In Stack Memory, original value doesn't change, it gives a copy to the new value so, original value remains same

//*************************************************************** 

//Heap Memory (Non-Primitive)


let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "zuhaina@google.com" //using dot changing email 

console.log(userOne.email);  
console.log(userTwo.email);

//In Heap Memory, original value changes, it gives a reference to the new value so, original value and the new value both gets changed


