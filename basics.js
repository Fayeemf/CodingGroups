//Create 3 different data types.
//1) String 2)Number 3) Boolean.
// console.log("Hey Dude");
// console.log(12);
// console.log("12");
// console.log(false);
// let cost = (45*4+75*2);
// let sellingprice = (cost * 1.5);
// let sellerfee = (cost * sellingprice * 0.2);
// console.log(sellingprice - sellerfee - cost);

//Task 2.
// let x = 10
// let x = x+2
// let x = x+x;
// console.log(x);
//console.logs that's already been declared an appropriate way to do this is.
let x = 10
x = 12+2
console.log(x);
//because you're manipulating it without declaring another one.
 
//What are the values of pizza and burger when this code executes.
let pizza = 5;
let burger = 10;
burger = pizza;
pizza = 10;
console.log(pizza);
pizza++;  //Add 1.
burger--; // substract 1
pizza /=2; // divide by 2
!false; //not false
console.log (pizza);

//section 3
const age = 17;
age++;
console.log(age);
//const isn't really for assigning, it's better to use "LET" because you're able to get into errors.
//Also const does not allow for reassignment it's rigid.
//To Execute your following "Console.logs" use "node then the files name."