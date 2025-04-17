// singleton
//Object.create()
//object literals

const mySym = Symbol("key1");


const JsUser = {
    name:"Shivam",
    "full name":"Shivam Sagar",
    [mySym]:"mykey1",
    age:20,
    location:"Jaipur",
    email:"shivam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
//console.log(JsUser."full name");
console.log(JsUser[mySym]);

JsUser.email = "shivam@youtube.com";   //to change value inside object
//Object.freeze(JsUser);                 //to lock a key inside object so that it can not be changed
JsUser.email = "shivam@amazon.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());