// Primitive

// 7 types : String, nnumber, boolean, null, undefined, symbol, BigInt
const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp= null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id == anotherId);

const bignumber = 3456876544578n

// Reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "krish", "raone"];
let myobj = {
    name : "Shourya",
    age : 21,
}

const myFunction = function() {
    console.log ("hello wowrld");
}

console.log (typeof bignumber);
console.log(heros);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(used in primitive types)  Heap(used in non-primitive datatypes)

let myyoutubename = "ltshourya"

let anothername = "ltclshourya"
anothername = "aspirant"

console.log(myyoutubename)
console.log(anothername)