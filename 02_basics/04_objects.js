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
const obj4 = {...obj1,...obj2};
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    }
]

users[1].email;

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor
const {courseInstructor} = course;
console.log(courseInstructor);
const {courseInstructor:instructor} = course;//:is used to shorten the name
console.log(instructor);

/*const navbar = ({company}) =>{              //if you don't use props.company then you will have to write company under the curly braces it is called as destructuring
      
}
navbar (company = "hitesh");*/

