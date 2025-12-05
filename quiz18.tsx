const library = [
  { 
    title: "The Hobbit", 
    author: { first: "J.R.R.", last: "Tolkien" }, 
    pages: 295 
  },
  { 
    title: "The Catcher in the Rye", 
    author: { first: "J.D.", last: "Salinger" }, 
    pages: 214 
  },
  { 
    title: "The Great Gatsby", 
    author: { first: "F. Scott", last: "Fitzgerald" }, 
    pages: 180 
  }
];


// Filter for books with more than 200 pages
const lengthyooks = library.filter(book => book.pages >= 200);

// Find the first one where the author’s last name starts with "T"
const authorTBook = lengthyooks.find(book => book.author.last.startsWith("T"));

const formattedString = `${authorTBook.title} by ${authorTBook?.author.first} ${authorTBook?.author.last}`;