// // Task 1

// let number = 10;
// if (number > 0) {
//   console.log(`Number ${number} is Positive`);
// } else if (number < 0) {
//   console.log(`Number ${number} is Negative`);
// } else {
//   console.log(`Number ${number} is Zero`);
// }

// Task 2

// let age = 19
//  if (age >=18){
//     console.log(`You are ${age} old, you are eligble for vote`)
//  } else{
//     console.log(`You are below of 18 Years old, you are not eligible for vote`)
//  }

// let num = 5;
// let num1 = 10;
// let num2 = 15;
// if (num >= num1) {
//   if (num >= num2) {
//     console.log(`Number ${num} is greater than ${num1} and ${num2}. `);
//   } else {
//     console.log(` Number ${num2} is greater than ${num} and ${num1}. `);
//   }
// } else {
//   if (num1 >= num2) {
//     console.log(` Number  ${num1} is greater than  ${num} and ${num2}. `);
//   } else {
//     console.log(`Number ${num2} is greter than ${num} and ${num1}. `);
//   }
// }

// Task 4

function getDayName({ dayNumber: number }) {
  let dayName = "";

  switch (dayNumber) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number. Please enter a number between 1 and 7.";
      break;
  }

  return dayName;
}

let dayNumber = 5;

let dayName = getDayName({ dayNumber });

console.log(`Day ${dayNumber} is ${dayName}.`);
