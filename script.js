console.log("Hello!")
let a=10;
console.log(a);


/**********/
var name="dev";
var age=27;
console.log(name);
console.log(age);
console.log("my name is " +name+ " and my age is " +age);


console.log(`my name is ${name} and my age is ${age}`);


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
////////////////////////////

let ob={name:"dev",age:27,city:"delhi"};


///////////////////ob

//array

let arr=[10,20,30,40];
console.log(arr);

console.log(typeof arr);

let x=10,y=20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);


//condition statement





//Loops

let r=[10,20,30,40];
for (let value of r)
{
    console.log(value);
}


//object with for in
let obj={name:"dev",age:27,city:"delhi"};
for (let key in  obj)
{
    console.log(key+" : "  +obj[key]);

    console.log(`${key} :${obj[key]}`);
}


