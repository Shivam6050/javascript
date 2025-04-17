const marvel_heros = ["Thor","Ironman","Spiderman"];
const dc_heros = ["Superman","Flash","Batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);  //concat operator
console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros];  //spread operator
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];  //flat operation to make an array simple
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);



console.log(Array.isArray("Shivam"));
console.log(Array.from("Shivam"));
console.log(Array.from({name:"Shivam"}));  //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));