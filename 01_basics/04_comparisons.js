//console.log(2 == 1);
//console.log(2 >= 1);
//console.log(2 <= 2);
//console.log(2 != 2);

//console.log("2" > 1);   //converts "2" into number automatically, so returns true
//console.log("02" > 1);  //converts "02" into number automatically, so returns true

//console.log( null > 0); //false
//console.log(null == 0); //false
//console.log(null >= 0); //true  

// above snippet reason
// * The reason is that == and >,<=,>=,< works differently. 
// * Comparisons convert null to a number, treating it as 0. therefore,
// * null >= 0 is true and null > 0 is false

//console.log(undefined == 0); //false (undefined always returns false)
//console.log(undefined > 0);  //false
//console.log(undefined <= 0); //false 

// === (strict check)

console.log("2" === 2);
console.log("2" === 1)
console.log("2" === "2")