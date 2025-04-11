 let score = 33;

 console.log(typeof score);
 console.log(typeof(score));

 let valueInNumber = Number(score);
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

 // "33" => 33
 //"33abc" => NaN
 // true => 1;false => 0
 
let isLoggedIn = "shivam";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true;0 => false
//"" => false
// "hitesh" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


 // ******************************Operations*****************************************

 let value = 3;
 let negValue = -value;
 console.log(negValue);/*it will return the negative of value */

 //These are arithmetic operation 
 console.log(2+2);
 console.log(2-2);
 console.log(2*2);
 console.log(2**2);
 console.log(2/2);
 console.log(2%2);

 let str1 = "hello";
 let str2 = "shivam";
 let str3 =str1+str2;
 console.log(str3);/*This will return hello shivam*/

console.log("1"+2);/*This will print 12 */
console.log(1+"2");/*This will print 12 */
console.log("1"+2+2);/*This will print 122 */
console.log(1+2+"2");/*This will print 32 */

console.log((3+4)*5%3);

console.log(true);/*This will return true */

//These are bad practices as these are tricky conversion and not good for code readability
console.log(+true);/*This will return 1*/
console.log(+"");/*This will return 0 as empty string is false and the conversion will return 0 */

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);/*This will return 101 and this is Postfix incrementation */

let gameCounter1 = 100;
++gameCounter1;
console.log(gameCounter1);/*This will return 101 and this is Prefix incrementation */

 
 