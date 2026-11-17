
//1.  Write a program to accept three distinct numbers from the user and determine the maximum among them
//using standard conditional blocks.

//let a= 5;
//let b=4;
//let c= 7;
//function number (a,b,c){
  //  if (a>b && a>c){
    //    console.log(`a number  is larger ${a} `);

    //}
    //else if (b>c && b>a){
     //   console.log(`b number is larger ${b}`);
       //}
       //else if (c>a && c>b){
        //console.log(`c number is larger ${c}`);
       //}
//}


//number(100,30000,3000)




//2  reate a basic calculator program using a switch-case block that takes two numbers and an operator
//character ( + , - , * , / ) and performs the corresponding calculation

//function value(num1,num2,operator){
//switch(operator){
  //  case "+":{
    //    result=num1+num2;
    //console.log (result);
    //break;
    //}
    //case "-":{
    //result=num1-num2;
    //console.log (result);
    //break;
    //}

     //case "*":{     
       //   result=num1*num2;
    //console.log (result);
    //break;
     //}
     //case "/":{
      // result=num1/num2;
    //console.log (result);
    //break;
     //}
     //case "%":{
       //   result=num1%num2;
    //console.log (result);
    //break;
     //}
    //default:{
    //console.log('invalid opretor');
    //}
//}
//}


//value(2,4,"/")




//3. Write a program that checks whether a given input year is a leap year or not according to standard calendar
//rules.


//let year=2034;
//if (year%4===0){
  //    console.log(`${year} is leap year`);


//}
//else{
  //    console.log('not leap yeal');
//}


// 4. Read an integer student score (0–100) and assign letter grades: ≥90 is 'A', ≥80 is 'B', ≥70 is 'C', ≥60 is 'D', and
//below 60 is 'F'.

//let score = 0;

//if (score<=100 && score>=90){
  //    console.log("A");

//}
//else if(score<90 && score>=80){
//      console.log('B');

//}
//else if (score<80 && score>=70){
  //    console.log("c")
//}
//else if (score<70 && score>=60){
  //    console.log('D');

//}
//else if (score<60){
  //    console.log("F");
//}
//else {
  //    console.log("not score range");
//}

// 5 Take an integer representing a month (1–12) and print the total number of days in that specific month,
//handling standard non-leap configurations.
  
//let manth = 10;
 //switch(manth){
      //case 1:{
        //    console.log("January has 31 days");
          //  break; 
      //}
      //case 2:{
        //    console.log("Febuary has 28 days");
          //  break;
      //}
      //case 3:{
        //    console.log("March has 31 days");
          //  break;
      //}
      //case 4:{
        //    console.log("April has 30 days");
          //  break;
      //}
      //case 5:{
        //    console.log("May has 31 days");
          //  break;
      //}
      //case 6:{
        //    console.log("June has 30 days");
          //  break;
      //}
      //case 7:{
        //    console.log("July has 31 days");
          //  break;
      //}
      //case 8:{
        //    console.log("August has 31 days");
          //  break;
      //}
      //case 9:{
        //    console.log("September has 30 days");
          //  break;
      //}
      //case 10:{
        //    console.log("October has 31 days");
          //  break;
      //}
      //case 11:{
        //    console.log("November has 30 days");
          //  break;

      //}
      //case 12:{
        //    console.log("December has 31 days");
          //  break;
      //}

      
      
      //default:{
        //    console.log("not a manth");
      //}
 //}


 // 6 Write a program to evaluate a single input character and classify whether it is a vowel, consonant, numeric
// digit, or special character.

// let char = 4;
// if (char .length !==1){
//       console.log("Please enter only one character.");
// }
// else if ( a,e,i,o,u,A,E,I,O,U ===char){
//      console.log("it is a vovel");
// }
// else if((char >="a" && char <="z") || (char >="A" && char <="Z")) {
//      console.log("it is constant");
//  }                   
// else if(char >=0 && char <=9){
//      console.log("it is number");
// }
// else{
//       console.log("it is special symbol");
// }


// Multiplication Tables
//  7  Write a program to print the complete multiplication table of any given integer input up to a multiplier of 10.


//let number=10;

//for (  i=1; i<=10; i++) {
 //     result=number*i;
  //    console.log(result);
//}


// 8 Write a iterative routine to calculate the absolute factorial of a given positive integer N using a standard 
//while loop.


//let number = 6;
//let factorial = 1;
//let i = 1;

//while (i <= number ){

  //factorial = factorial * i;
  //i++;
//}
  //  console.log( "factorial of " + number +  " is "  + factorial );


   // 9  Generate and display the first N sequential numbers of the classic Fibonacci series starting from 0 and 1.
     // let a = 0;
      //let b = 1;
      //let i = 1;
      //let num = 10;

//      while(i<= num){
  //      console.log(a);
    //     let next= a+b;
      //   a = b;
      //   b = next;
         
       //  i++;
      //}







//10  Write a logical routine to strip and calculate the sum of all individual digits within a given integer (e.g., input 
//1234 yields 10 ).

 //  let sum=0;
  // let num=5;
//for(let i=1; i<=num; i++){
  //    sum= sum+i;    
//}
  //console.log(+sum);


  // 11 Design a program to analyze an incoming integer and verify whether it qualifies structurally as a prime
// number.


//let number =2;
 //if (number%2 === 1 && number % number === 0 ){
  //console.log("it is  a prime number");
 //}
 //else {
  //console.log('it is not a prime number');
 //}

 //12 Construct a program utilizing nested loops to print a right-angled triangular pattern of asterisks exactly as
//follows:

//for(i=1; i<=5; i++){
 // pattern="";
  //for(j=1; j<=i; j++){  
   // pattern += "*";
  //}
  //console.log(pattern);
//}


// 13  Scan a raw integer array and extract the absolute second largest value without performing a full global sort of
//the dataset

//let arr = [10, 25, 8, 40, 15, 30];

//let largest = -Infinity;
//let secondLargest = -Infinity;

//for (let i = 0; i < arr.length; i++) {

  //  if (arr[i] > largest) {
    //    secondLargest = largest;
      //  largest = arr[i];
    //}

    //else if (arr[i] > secondLargest && arr[i] !== largest) {
     //   secondLargest = arr[i];
    //}
//}

//console.log("Second largest number:", secondLargest);


//14 Write an algorithm to completely reverse the order of elements within an array entirely in-place, using zero
//additional temporary arrays.
//let arr = [10, 20, 30, 40, 50];

//let start = 0;
//let end = arr.length - 1;

//while (start < end) {
  
  //  let temp = arr[start];
   // arr[start] = arr[end];
    //arr[end] = temp;

  //  start++;
   // end--;
//}

//console.log(arr);

//15 Formulate a routine to count and print the explicit occurrence frequency of every distinct element present
//within an incoming array.
//let arr = [10, 20, 10, 30, 20, 10, 40];

//let frequency = {};

//for (let i = 0; i < arr.length; i++) {
    //let element = arr[i];

    //if (frequency[element]) {
     //   frequency[element]++;
    //} else {
   //     frequency[element] = 1;
  //  }
//}

//for (let element in frequency) {
 //   console.log(element + " occurs " + frequency[element] + " times");
//}

//16 Given an integer array, shift every single zero value to the absolute end of the collection while carefully
//retaining the original relative structural order of all non-zero elements.

//let arr = [0, 5, 0, 3, 8, 0, 2];

//let index = 0;

//for (let i = 0; i < arr.length; i++) {
  //  if (arr[i] !== 0) {
  //      arr[index] = arr[i];
   //     index++;
    //}
//}


//while (index < arr.length) {
  //  arr[index] = 0;
   // index++;
//}

//console.log(arr);


//17 Write a program to scan an array, capture, and display all value occurrences that register as duplicate
//elements.

//let arr = [10, 20, 30, 10, 40, 20, 50, 10];

//console.log("Duplicate elements:");

//for (let i = 0; i < arr.length; i++) {

  //  let count = 0;

   // for (let j = 0; j < arr.length; j++) {

     //   if (arr[i] === arr[j]) {
       //     count++;
        //}
    //}

    //if (count > 1) {
      //  let alreadyPrinted = false;

        //for (let k = 0; k < i; k++) {
          //  if (arr[i] === arr[k]) {
            //    alreadyPrinted = true;
              //  break;
            //}
       // }

        //if (!alreadyPrinted) {
         //   console.log(arr[i]);
        //}
    //}
//}

//18  Given two distinct arrays, write a localized method to find and isolate common elements representing the
//structural intersection between them.


//let arr1 = [10, 20, 30, 40, 50];
//let arr2 = [30, 40, 50, 60, 70];

//let common = [];

//for (let i = 0; i < arr1.length; i++) {

  //  for (let j = 0; j < arr2.length; j++) {

    //    if (arr1[i] === arr2[j]) {

      //      if (!common.includes(arr1[i])) {
        //        common.push(arr1[i]);
          //  }

            //break;
       // }
   // }
//}

//console.log("Common elements:", common);


//19. Verify whether a given string reads identically forwards and backwards, completely ignoring native casing and
//white space tokens.
//let str = " nikhil";

//let cleanStr = str.toLowerCase().replace(/\s/g, "");


//let reverseStr = cleanStr.split("").reverse().join("");

//if (cleanStr === reverseStr) {
//    console.log("Palindrome");
//} else {
 //   console.log("Not Palindrome");
//}

//20  Process a full textual sentence to compute and return the explicit count of all standard vowels and consonants
//contained within.

//let str = "nikhil";

//let vowels = 0;
//let consonants = 0;


//for (let i = 0; i < str.length; i++) {

    //let ch = str[i].toLowerCase();

    //if (
        //ch === 'a' ||
        //ch === 'e' ||
       // ch === 'i' ||
       // ch === 'o' ||
      //  ch === 'u'
    //) {
     //   vowels++;
    //}
    //else if (ch >= 'a' && ch <= 'z') {
    //    consonants++;
  //  }
//}

//console.log("Vowels:", vowels);
//console.log("Consonants:", consonants);

//22 Write a routine to reverse the chronological order of individual words in a sentence string (e.g., "Hello
//World" transforms into "World Hello" ).

//let str = "Hello World";

//let result = str.split(" ").reverse().join(" ");

//console.log(result);

//22  Locate and return the precise first character in an input string that does not repeat anywhere else within the
//text boundary.

//let str = "aabbcde";

//let found = false;

//for (let i = 0; i < str.length; i++) {

  //  let count = 0;

   // for (let j = 0; j < str.length; j++) {

     //   if (str[i] === str[j]) {
       //     count++;
        //}
    //}

    //if (count === 1) {
     //   console.log("First non-repeating character:", str[i]);
      //  found = true;
       // break;
    //}
//}

//if (!found) {
 //   console.log("No non-repeating character found");
//}

//23 Determine if two separate incoming strings represent exact anagrams of each other, containing identical
//character distributions arranged differently.

//let str1 = "listen";
//let str2 = "silent";

//str1 = str1.toLowerCase();
//str2 = str2.toLowerCase();


//let s1 = str1.split("").sort().join("");
//let s2 = str2.split("").sort().join("");


//if (s1 === s2) {
  //  console.log("Strings are Anagrams");
//} else {
 //   console.log("Strings are not Anagrams");
//}

//24  Extract all numeric digit elements from an unformatted alphanumeric string and recombine them sequentially
//into a clean, standalone digital string.


//let str = "abc123xyz45@67";

//let result = "";

//for (let i = 0; i < str.length; i++) {

  //  if (str[i] >= '0' && str[i] <= '9') {
    //    result = result + str[i];
    //}

//}

//console.log("Extracted numbers:", result);


//25  Loop sequentially from integers 1 to 50. For exact multiples of 3, output "Fizz" . For multiples of 5, output
//"Buzz" . For numbers meeting both criteria, return "FizzBuzz" .


//for(i=1;i<=50;i++){
  //if(i%3===0  && i%5===0){
   // console.log("FizzBuzz");
  //}
   //else if (i % 3 === 0) {
    //    console.log("Fizz");
    //}
    //else if (i % 5 === 0) {
    //    console.log("Buzz");
    //}
    //else {
     //   console.log(i);
    //}

//}

//26  Given an array of text strings, selectively strip out all records initiating with a vowel, capitalize the remaining
//string entries fully, and output the final array.

//let fruits = ["apple", "banana", "orange", "grapes", "mango", "kiwi"];

//let result = fruits
  //  .filter(word => !["a", "e", "i", "o", "u"].includes(word[0].toLowerCase()))
   // .map(word => word.toUpperCase());

//console.log(result);


//27  Examine a string comprised strictly of bracket delimiters (e.g., "{[()]}" ) and use systematic logic to
//determine if the enclosing structure is completely balanced and legally terminated.
//function isBalanced(str) {
   // let stack = [];

   // for (let char of str) {

    //    if (char === '(' || char === '{' || char === '[') {
    //        stack.push(char);
    //    }

   //     else {
   //         if (stack.length === 0) {
    //            return false;
   //         }

    //        let last = stack.pop();

  //          if (
   //             (char === ')' && last !== '(') ||
   //             (char === '}' && last !== '{') ||
   //             (char === ']' && last !== '[')
   //         ) {
   //             return false;
  //          }
 //       }
 //   }

 //   return stack.length === 0;
//}

//console.log(isBalanced("{[()]}")); 
//console.log(isBalanced("([)]"));   
//console.log(isBalanced("{[}"));    