// Task 1

// let number = 10;
// for (let i = 1; i <= number; i++) {
//   console.log(i);
// }

// Task 2

// console.log(` Multiplication of Table  `);
// let table = 5;
// for (let i = 1; i <= 10; i++) {
//   let result = table * i;
//   console.log(`${table} * ${i} = ${result}`);
// }

// Task 3
// let num = 1;
// let sum = 0;

// while (num <= 10) {
//     sum = sum + num;
//     num = num + 1;
// }

// console.log("The sum of numbers from 1 to 10 is:", sum);

// Task 4

// console.log("Print the number from 10 to 1: -");
// let num = 10;
// while (num >= 1) {
//   console.log(` ${num}`);
//   num = num - 1;
// }

// Task 5

// let num = 1;
// console.log(`Print the number from 1 to 5: -`)
// do {
//   console.log(`${num}`);
//   num++;
// } while (num <= 5);

// Task 6

// function factorial(num) {
//   let result = 1;
//   let i = 1;

//   // Check if num is non-negative
//   if (num < 0) {
//       return "Factorial is not defined for negative numbers";
//   }

//   do {
//       result *= i;
//       i++;
//   } while (i <= num);

//   return result;
// }

// const number = 5;
// console.log(`The factorial of ${number} is:`, factorial(number));

// // Task 7

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// // Task 8

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//       continue;
//   }
//   console.log(i);
// }

// Task 9

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//       break;
//   }
//   console.log(i);
// }
