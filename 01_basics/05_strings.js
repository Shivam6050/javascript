const name = "shivam";
const repoCount = 50;

console.log(name + repoCount + "Value");/*This is outdated and this is called concatenate */

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//This is called string interpolation

const gameName = new String('Snake-and-ladders');

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-16,8);
console.log(anotherString);

const newStringOne = "      shivam   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam.com/shivam%50sagar";
console.log(url.replace('%50','-'));
console.log(url.includes('shivam'));


console.log(gameName.split('-'));