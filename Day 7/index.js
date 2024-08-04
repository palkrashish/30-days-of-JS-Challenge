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
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Create book objects
let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
let book2 = new Book("1984", "George Orwell", 1949);
let book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);

// Define the library object
let library = {
    name: "Example Library",
    books: [book1, book2, book3]
};

// Access and log the name of the library
console.log("Library Name:", library.name);

// Access and log the titles of all books in the library
console.log("Books in the Library:");
library.books.forEach(book => {
    console.log(book.title);
});