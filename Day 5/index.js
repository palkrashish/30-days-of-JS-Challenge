// Task 1
// function numberCheck(number){
//     if(number % 2 ==0){
//         console.log(`Number is Even: - ${number}`)
//     }else{
//         console.log(`Number is Odd: - ${number}`)
//     }
// }

// numberCheck(5)

// Task 2

// function squareNumber(number) {
//   return number * number;
// }
// let result = squareNumber(5);
// console.log(`Square  of  number is: ${result} `);

// Task 3
// function gratestNumber(num, num1) {
//   if (num >= num1) {
//     console.log(`${num} is greater than ${num1}.`);
//   } else {
//     console.log(`${num1} is greater than ${num}.`);
//   }
// }

// gratestNumber(10, 15)

//Task 4

// function conString(str,str1){
// console.log(`Concatenating of two string: ${str} ${str1}`)
// }

// conString('Ashish', 'Pal')

// Task 5

// const calculateSum = (num1, num2) => num1 + num2;

// let result = calculateSum(3, 4);

// console.log(`Sum of two number ${result}`);

// Task 6

// const strContains = (str, char) => str.includes(char);
// let result = strContains("Ashish, Pal!", "S");
// console.log(result); // False

// Task 7
// function produceValue(num1, num2 = 2) {
//   return num1 * num2;
// }
// let result = produceValue(5);
// console.log(`Result of Product value ${result}`);

// Task 8

// function greetingMsg(name, age = 19){
//     return console.log(`Welcome ${name} and your age is ${age}, hope youa are doing well `)
// }

// greetingMsg('ashish')

// Task 9

function callFunctionNTimes(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

function greet() {
  console.log("Hello, world!");
}

callFunctionNTimes(greet, 3);
// Output:
// Hello, world!
// Hello, world!
// Hello, world!

function countAndLog() {
  let count = 0;
  return function () {
    count++;
    console.log(`Function called ${count} times.`);
  };
}

const counterFunc = countAndLog();
callFunctionNTimes(counterFunc, 5);
// Output:
// Function called 1 times.
// Function called 2 times.
// Function called 3 times.
// Function called 4 times.
// Function called 5 times.
