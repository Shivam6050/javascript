const accountId = 157868;
let accountEmail = "shivam@gmail.com";
var accountPassword = "123345";
accountCity = "jaipur";
let accountState; /*if you declare a variable in javascript without any value then it's value will be undefined.*/

// accountId = 2 //not allowed because you can't change const

accountEmail = "ss@ss.com";
accountPassword = "212354";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity]);
