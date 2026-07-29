const name = "shourya"
const repoCount = 50

// console.log(name + repoCount + value)

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('shourya vardhan')

console.log (gameName[0]) //to access keys of string
console.log (gameName.__proto__); 

console.log (gameName.length); //shows length of string
console.log (gameName.toUpperCase()); // make all alphabets in uppercase
console.log (gameName.charAt(2)); //shows character to the corresponding index in string
console.log (gameName.indexOf('s')) // shows index of corresponding char

const newString = gameName.substring(0,4) //char fromm 0to3 will be printed
console.log(newString);

const anotherstring = gameName.slice(0,4)
console.log(anotherstring);

const newstringone = "    shourya    ";
console.log(newstringone);
console.log(newstringone.trim()); //used to erase the unnecessary space in the string

const url = "https://shourya.com/shourya%20vardhan"
console.log(url.replace('%20', '-')) // used to replace any element or char in url
console.log(url.includes('shourya')); // to find out weather your url contains that specific word, element, character or not

console.log(gameName.split(' ')) // splits the array based on ()


