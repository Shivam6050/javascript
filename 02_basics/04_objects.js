//singleton object

//const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abdh";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Shivam",
            lastname:"Sagar"
        }
    }
}
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname);
//console.log(regularUser.fullname.userfullname.firstname);
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

//const obj3 = {obj1,obj2};
const obj3 = Object.assign({},obj1,obj2);  //curly braces is used as target and if we don't use this then first object become target and next object become source
console.log(obj3);