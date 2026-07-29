const score = 400;
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision()) //returns a string containing a number either in exponential or fixed-point value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)) // returns positive integer only
console.log(Math.round(4.3)); // rounds of to the nearest whole number
console.log(Math.ceil(2.1)); // returns round off upper value
console.log(Math.floor(2.9)); // returns round off lower value
console.log(Math.min(2, 3, 6, 11)); // Returns the minimum of a set of supplied numeric expressions.
console.log(Math.max(45, 0, 21, 3)); // Returns the larger of a set of supplied numeric expressions.

console.log(Math.random()); // returns a pseudoram number between 0 and 1.
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)
