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

const bookName = {
  title: "You do not know JS",
  author: "Kyle",
  year: 2024,
  bookInformation: function () {
    return this.title + " Author " + this.author;
  },
};
console.log(bookName.bookInformation());