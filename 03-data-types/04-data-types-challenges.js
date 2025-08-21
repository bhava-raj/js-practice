// Data Types Challenges

// Challenge 1: Store a book’s details (object)
let book = {
  title: "The Monk Who Sold His Ferrari",
  author: "Robin Sharma",
  pages: 198
};
console.log("Book Details:", book);

// Challenge 2: Create an array of 5 favorite movies
let movies = ["Interstellar", "Inception", "Tenet", "Shutter Island", "The Dark Knight"];
console.log("Favorite Movies:", movies);

// Challenge 3: Check data types using typeof
console.log("Type of book:", typeof book);       // object
console.log("Type of movies:", typeof movies);   // object (arrays are special objects)
console.log("Type of movies[0]:", typeof movies[0]); // string

// Challenge 4: Boolean practice
let isLoggedIn = false;
console.log("Am I logged in?", isLoggedIn);

// Challenge 5: Undefined vs Null
let score;
let rank = null;
console.log("Score:", score);  // undefined
console.log("Rank:", rank);    // null
