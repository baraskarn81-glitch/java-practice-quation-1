  //practice quation 01
 //1. Greeting Function Create a function that takes a person’s name and prints a welcome
//message.  
  function greet(){
        console.log("hey Nikhil");
        console.log('welcome to e-skill');
     }
    greet();





// 2. Add Two Numbers Write a function expression that takes two numbers and returns their sum.

  
 let sum = function(){
    console.log("expression funcation");
    let a=30;
    let b=10;
    let sum=a+b;
    console.log(`a=${a} and b=${b}   sum=${sum}`);
 }



 sum();
 let mult = function(val1,val2){
    console.log('expression funcation');
     console.log(`value1 is ${val1} & value2 is ${val2}`);
     let product = val1*val2;
     console.log(`Product is ${product}`);
 }
 mult(2,3);




function num(a,b){
    console.log('normal funcation');
     console.log("a:",a, "b:",b);
     let result = a+b;
     console.log("result:",result);
 }
    num(100,30)    

//3.Square of a Number Write an arrow function that returns the square of a given number.


    let div = () => {
     console.log('Arrow function');
     let a = 5;
    // let b = 5;
     let Square = a*a;
     console.log(`number: ${a} Square is ${Square}`);
}
div();



//4 Even or Odd Write a function that checks if a number is even or odd and prints the result.
  let s = 4;
    if ( s % 2 === 0){

        console.log(`number ${s} is even`);   
     }
       
     else{
          console.log(`number ${s} is odd`);
        }

 //} 
// cheker(45670);



// 5 Find Maximum Write an arrow function that takes two numbers and returns the larger one.

//let u=34;
//let v=95;
//let w=17;

const value3 = (u,v,w)=>{
if(u>v && u>w){
    console.log (`${u} is larger number`);
}
else if(v>u && v>w){
    console.log (`${v} is larger number`);
}
else if (w>u && w>v){
    console.log(`${w} is larger number`);
}
}

value3(109,96,67)


// 6  Voting Eligibility Write a program that checks if a person’s age is 18 or above and prints if they
//can vote.
  

 let age =100;
   
  if (age>18){
    console.log("persons age is 18  above eligible for voting");

  }
  else if(age==18){
     console.log("persons age is 18 year eligible for voting");

  }
  else{
    console.log("persons age is 18 less not eligible for voting");
  }


  // 7 Positive or Negative Write a program that checks if a number is positive or negative and prints
//the result.
  

 function cheak(g){

if(0>g){
    console.log(`${g} number is nagative`);

}
else{
    console.log(`${g} number is positive`);
}
 }


cheak(0)



// 8 Grade Calculator Write a program that prints grades based on marks: - 90+ ® A - 75–89 ® B -
//50–74 ® C - Below 50 ® Fail.

let marks = 06;
if(marks >= 90 && marks <= 100){
    console.log("A");
}
else if(marks <= 89 && marks>=75){
    console.log("B");

}
else if(marks <= 74 && marks >= 50){
    console.log("c");
}
else{
console.log("fail");
}



// 9 Login System Write a function that checks if username = "admin" and password = "1234". If
// correct ® print "Login Successful", otherwise "Invalid credentials 

 let username = "admin";
 let password = 1234;
if (username == "admin" && password==1234){
    console.log("login successful");
}
else{
    console.log('invalid credentials');
}

//10 Day of the Week Write an arrow function that takes a number (1–7) and returns the day name
//(1 = Monday, … 7 = Sunday).



 let week = 5;
    if( week == 1){
        console.log(`${week} = manday`);

    }
    else if(week == 2){
        console.log(`${week} = tuesday`);
    }
    else if (week == 3){
        console.log(`${week} = wednesday`);
    }
    else if ( week == 4){
        console.log(`${week} = thursday`);

    }
    else if (week ==5){
        console.log(`${week} = friday`);
    }
    else if (week == 6){
        console.log(`${week} = saturday`);
    }
    else if (week == 7){
        console.log(`${week} = sunday`);

}
 else {
    console.log(`${week} not a week days`);
 }





