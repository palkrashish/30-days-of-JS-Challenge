// Task 1
// const bookName = {
//   title: "You do not know JS",
//   author: "Kyle",
//   year: 2024,
// };

// console.log(bookName)

// Task 2
// const bookName = {
//     title: "You do not know JS",
//     author: "Kyle",
//     year: 2024,
//   };
// console.log(
//   `Best Book of JS is '${bookName.title}' and author is '${bookName.author}' relase year '${bookName.year}' `
// );

// Task 3

// const bookName = {
//   title: "You do not know JS",
//   author: "Kyle",
//   year: 2024,
//   bookInformation: function () {
//     return this.title + " Author " + this.author;
//   },
// };
// console.log(bookName.bookInformation());

// Task 4
// const bookName = {
//     title: "You do not know JS",
//     author: "Kyle",
//     year: 2024,
//     bookInformation: function () {
//       return this.title + " Author " + this.author;
//     },
//     updateYear: function(updateYear){
//         this.year = updateYear
//     }
//   };
//   console.log(bookName);
//   bookName.updateYear(2025)
//   console.log(bookName)

// Task 5

// Define book object constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // Create book objects
// let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// let book2 = new Book("1984", "George Orwell", 1949);
// let book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);

// // Define the library object
// let library = {
//   name: "Example Library",
//   books: [book1, book2, book3],
// };

// // Log the library object to the console
// console.log(library);

// Task 6
// Define book object constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// // Create book objects
// let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// let book2 = new Book("1984", "George Orwell", 1949);
// let book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);

// // Define the library object
// let library = {
//     name: "Example Library",
//     books: [book1, book2, book3]
// };

// // Access and log the name of the library
// console.log("Library Name:", library.name);

// // Access and log the titles of all books in the library
// console.log("Books in the Library:");
// library.books.forEach(book => {
//     console.log(book.title);
// });


// Task 7
// Define book object constructor with a method
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   // Method to get book information
//   this.getBookInfo = function () {
//     return this.title + " (" + this.year + ")";
//   };
// }

// // Create a book object
// let book = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// // Log the result of calling the getBookInfo method
// console.log(book.getBookInfo());

// Task 8

// Define the book object
// let book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
// };

// // Iterate over the properties of the book object using for...in loop
// console.log("Iterating over properties of the book object:");
// for (let property in book) {
//   if (book.hasOwnProperty(property)) {
//     console.log(property + ": " + book[property]);
//   }
// }


// Task 9

// Define the book object
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  };
  
  // Get all keys of the book object and log them
  console.log("Keys of the book object:");
  let keys = Object.keys(book);
  console.log(keys);
  
  // Get all values of the book object and log them
  console.log("\nValues of the book object:");
  let values = Object.values(book);
  console.log(values);