// Week 3 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

function  logGreeting(){  
  console.log("Hello!");    //not returning anything
}

logGreeting();    //actually calling function

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

function getName(){
  return "Janice";
}

console.log(getName()); //need to console log the return value

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

function logGreeting2(){
  console.log(`Hello! My name is ${getName()}.`);
}

logGreeting2();

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function addNumbers(num1, num2, num3){
  return num1 + num2 + num3;
}

console.log(addNumbers(0,0,0));   //0
console.log(addNumbers(100,50,3));  //153
console.log(addNumbers(-2,0,1));  //-1
console.log(addNumbers(3,33,37));  //73
console.log(addNumbers(1,1,1));  //3


// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

function getADiscount(age){
  if(age <= 14 || age >= 65){  //using OR operator because only one condition needs to be true
    return true; 
  }
  return false;
}

console.log(getADiscount(14)); // true
console.log(getADiscount(13)); // true
console.log(getADiscount(15)); // false
console.log(getADiscount(65)); // true
console.log(getADiscount(66)); // true
console.log(getADiscount(64)); // false
console.log(getADiscount(20)); // false

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function printString(phrase, num){
  let i = 0;
  while(i < num){
    console.log(phrase);
    i++;          //need to increment to prevent infinite loop
  }
}

printString("Hello!", 10);
printString("Don't print me", 0);
printString("", 3);
printString("Five times", 5);
printString("qwertyuiop", 1);

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does

// mysteryFunction1 takes in a variable -- a number, specifically -- and multiplies it by 2. It returns that new number.

// 2. What prints out for the value of y

// 4

// 3. What prints out for the value of z

// 8

// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// My answers were correct. I knew that y is a constant variable, meaning that it cannot be changed. 
// Thus, it would remain 4. z calls on mysteryFunction1 with 4 through the variable y, so after the function runs, the result is 8.

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does

//  mysteryFunction2 takes two parameters: two numbers, p1 and p2. It creates a constant variable, x, that subtracts p1 and p2. 
//  Then, the function returns this constant variable.

// 2. What prints out for the value of a

//  6

// 3. What prints out for the value of b

//  5

// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// I was correct. To solve for a, we would call mysteryFunction2 and it would subtract 10 and 4. 
// To solve for b, we would call mysteryFunction2 again and it would subtract our result from a and 1.

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";

const groceryArray = groceryList.split(',');    //need to define how to split the elements by what is between them -- in this case, a comma
console.log(groceryArray);

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";

const firstTwoThings = mySchedule.split("--->", 2);
console.log(firstTwoThings);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I did not find this section difficult. I feel very comfortable with the function syntax and I really enjoy working with string methods. 
// However, I did utilize the provided link to the split() method. 
// I learned that you could put limits when using split to control how many elements you have in the new array. I did not know that! 
// I also implemented the advice that Cristina gave me when I created the getADiscount function: 
// I used more inclusive syntax (>= and <=) so that I would not have to use additional numbers that weren't mentioned in the question.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
