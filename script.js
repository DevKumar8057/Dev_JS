console.log("Hello!")
let a=10;
console.log(a);


/**********/
var name="dev";
var age=27;
console.log(name);
console.log(age);
console.log("my name is " +name+ " and my age is " +age);


//console.log('my name is ${name} and my age is ${age}');


/************** */


let b="delhi";
b="lucknow";
console.log(b)

/***************** */

let s=true;
console.log(s);
console.error("this is error");

console.warn("this is warning");
console.info("this is info");
console.debug("this is debug");

console.table({name:"dev",age:27,city:"delhi"});
//console.clear();


for(let i=0;i<3;i++){
    console.count("loop executed: ")  //count work as i
}