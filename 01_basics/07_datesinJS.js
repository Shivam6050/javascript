//Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata"}));

let myCreatedDate = new Date(2023,0,23,5,3);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate()+1);
console.log(newDate.getDay());

let newDate2 = new Date();
console.log(newDate2.toLocaleString('default',{
    weekday:"long",
}));
