// Task 1
// let name = "Ashish";
// let age = 25;
// let fullName = `My name is  "${name}" and age is: ${age}`;
// console.log(fullName)

// Task 2
//  let fullName = `My name is Ashish Kr Pal
//  Currently I live in Delhi. I love to drink chai.
//  `

//  console.log(fullName)

// Task 3

// let array = [1, 2, 3, 4];

// let [first, second] = array;

// console.log("First number", first);
// console.log("Second number", second);

// Task 4

// let bookDescription = {
//   name: "Chai aur code",
//   author: "Hitesh Choudhary",
// };

// let { name, author } = bookDescription;

// console.log("Book Name is", name);
// console.log("Author Name is ", author)

// Task 5

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array1 = [11, 12, 13, 14, 15, 16];

// let resultOfArray = [...array, ...array1]
// console.log('Complete array', resultOfArray)


// Task 6
// function additionNumber( ...numbers){
//     let total = 0
//     for(   let number of numbers ){
//         total = total + number
//     }
//     return total
// }

// console.log(additionNumber(5,10))

// Task 7

// function productDescription (value, value1 = 1){
//     console.log(`Product details one is ${value} and second is ${value1} `)
// }

// console.log(productDescription('Chair'))
// console.log(productDescription('Chair',1000))

// Task 8

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    // Method to display the car's details
    displayDetails() {
        return `${this.year} ${this.brand} ${this.model}`;
    },
    // Method to calculate the age of the car
    calculateAge(currentYear) {
        return currentYear - this.year;
    }
};

// Logging the object to the console
console.log(car);
console.log(car.displayDetails())
console.log(car.calculateAge(2024))
