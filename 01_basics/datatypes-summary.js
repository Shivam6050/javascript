// Primitive Data Type:-There are 7 types of this which are:-String , Number , Boolean , null , undefined , Symbol , BigInt
const score = 100;//number datatype
const scoreValue = 100.3;//number datatype(float)

const isLoggedIn = false;//Boolean datatype
const outsideTemp = null;//null datatype
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);//these two are not equql as symbol will return diiferent output every time

const bigNumber = 637797367827927278n;/*this is the example of bigInt whenever we store a larger number like these we store it in bigInt */

//Reference datatype(Non-Primitive Datatype):- Array , Objects , Functions

const heros = ["Shaktiman","Nagraj","Doga"];//Example of array

let myObj ={
    name: "shivam",
    age:20,
}//Example of Objects

const myFunction = function(){
    console.log("Hello world");
}//Example of function