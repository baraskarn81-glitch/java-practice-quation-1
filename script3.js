
//1  .  kes an array [1, 2, 3, 4] and returns a new array where each number is
//increased by 10 using map()4 .


      // let numbers=[1,2,3,4];
//let num = current value of numbers;
//let result= numbers.map( element  => element+10);
//console.log(result);


//2 Print each element of the array ['a', 'b', 'c', 'd'] along with its index using forEach().

//let letters = ['a', 'b', 'c', 'd'];
//letters.forEach((element, index) => {
  //  console.log(element, index);
//});


// 3 . Given const numbers = [10, 20, 30, 40, 50, 60], use slice() to extract [20, 30, 40].

//const  numbers=[10,20,30,40,50,60];
//const result = numbers.slice(1,4);
//console.log(result);


//4 . Start with let animals = ['cat', 'dog', 'rabbit']. Use push() to add 'lion' and pop() to remove the last
//animal. Log the final array.


//let animals=['cat','dog','rabbit'];
//console.log(animals);
// animals.push('lion');
//console.log(animals);
//animals.pop();
//console.log(animals);




//5 . Convert the string 'JavaScript Is FUN' into all lowercase, then all uppercase
//let  text = "JavaScript Is FUN";
//let lower= text.toLowerCase();
//let upper = text.toUpperCase();
//console.log(text);
//console.log(lower);
//console.log(upper);

//6 Reverse 'hello' without using split() — hint: use a for loop or Array.from()
//let str="hello";
 //let Reverse="";
 //for(let i= str.length-1;  i>=0; i--){
  //  Reverse = Reverse+str[i];
 //}
 //console.log(Reverse);



 //7  Given const fruits = ['apple', 'mango', 'banana'], create a new array with all fruit names in
//uppercase using map().


 //const fruits = ['apple','mango','banana'];
 //console.log(fruits);
 //const upperfruits = fruits.map(fruit => fruit.toUpperCase());
 //console.log(upperfruits);


 //8 Given const student = { name: 'Sara', grade: 'A', city: 'Pune' }. Change the city to 'Delhi' and add a
// new property age: 20.


//const student={
  //  name: "sara",
   // grade: "A",
//     city: "pune"
// };
// console.log(student);
// student.city= "bhopal";
// student.age= 22;

// console.log(student);


//9 Given const employees = [{ name: 'John', salary: 25000 }, { name: 'Riya', salary: 30000 }, { name:
//'Sam', salary: 40000 }], use forEach() to print each employee's name and salary

//const employees =[
    //{
        //name:'john',
      //  salary: 25000
    //},
    //{
        //name:'riya',
      //  salary: 30000
    //},
    //{
      //  name:'sam',
    //    salary:40000
  //  }
//];
//employees.forEach(functon(employee){
//console.log( +employee.name , + employee.salary);});



//10 . Given const users = [{ name: 'Alice', score: 45 }, { name: 'Bob', score: 70 }, { name: 'Charlie',
//score: 55 }], return a new array adding passed: true if score >= 50, else false.

// const users =[{
//     name:'Alice',
//     score: 45
// },
// {
//     name:'Bob',
//     score: 70
// },
// {
//     name:'charlie',
//     score: 55
// }];
// console.log(users);
// const scores = users.map(user => {
//     return {
//         ...user,
//         passed: user.score >= 50
//     };
// });

// console.log(scores);


//11. Write a function sum(a, b) that returns the sum of two numbers.
//function sum(a,b){
  //  let result =a+b;
  //  console.log(a+b);
//}
//sum(10,2)


// 12 Write a function makeMultiplier(multiplier) that returns another function which multiplies a
//number by that multiplier.
//function makeMultiplier(multiplier){
    //return function (number){
    //    return number*multiplier;
  //  };
//} 
//const num = makeMultiplier(12);
//console.log(num(3));



//13   Write a function performOperation(a, b, operationCallback) that takes two numbers and a
//callback (like add or subtract).

//function performOperation(a,b,operationCallback){
  //  return operationCallback(a,b);
//}
//function add(a,b){
  //  return a+b;

//}
//function subtract(a,b){
  //  return a-b;
//}
//function multification(a,b){
  //  return a*b;
//}
//function multification(a/b){
//    return a/b;
//}
//console.log(performOperation(2,4,subtract));



//14 . Create a function applyTwice(arr, fn) that takes an array and a function, and applies the function
//twice using map().
//function applyTwice(arr,fn){
 // return arr.map(num => fn(fn(num)));
//}

//15 . Use setTimeout() to log '3 seconds passed' after exactly 3 seconds.

//setTimeout (
  //function() {
   // console.log("3 second  passed"); 
  //},3000
//);

//16Create a function getUserData(callback) that waits 2 seconds using setTimeout() and then calls
//the callback with 'User data loaded'.

//function getUserData(callback){
  //setTimeout(
    //function(){
    //  callback("User data loaded");
    //},2000

  //);

//}
//function displayData(message) {
  //  console.log(message);
//}
//getUserData(displayData);


//17   Simulate making tea using nested setTimeout(): Boil water, Add tea leaves, Add milk, Tea is
//ready — each after 1 second
 //setTimeout (
  //function(){
   // console.log("Boil water");
 
 //setTimeout(
  //function(){
    //console.log("Add tea leaves");
    //setTimeout(
      //function(){
       // console.log("Add milk");
      
      //setTimeout(
       // function(){
       //   console.log("Tea is ready");
      //  },1000
     // );
    //},1000
   // );

 // },1000
 //);
  //},1000
 //);


 //18 . Rewrite the tea example using separate named functions instead of nested callback

//  function teaready(){
//   console.log('tea is ready');
//  }
//  function addmilk(){
//   console.log('add milk');
//   setTimeout(teaready,1000);

// }
// function boilwater(){
//   console.log ('boil water');
//   setTimeout(addmilk,1000);
// }
// function addtea(){
//   console.log("add tae leave");
//   setTimeout(boilwater,1000);
// }
// setTimeout(addtea,1000);


19//Create a function calculate(a, b, callback) that passes the result and a message like 'Operation
//complete' to the callback.
 

// function calculate(a,b,callback){
//       let result=a+b
//        console.log(`Result: ${result}`);
//        callback("opreation complete");
// }
// function msg( message){

// console.log(`message: ${message}`);
// }

// calculate(1,2,msg)

//20  Given const nums = [1, 2, 3, 4, 5], use map() and forEach() together: double each number using
//map(), then print each doubled number using forEach().

//let nums=[1,2,3,4,5];
//const double= nums.map((num)=>{
  //return num*2; 
  //console.log(num);
//});
 // double.forEach((num)=>{
  // console.log(num);
  //})
