console.log("Welcome to world of nodejs");

const superhero = require('superheroes')
// Gives any one random super hero name
console.log('Hero Name: ' + superhero.random()); 

// Gives all supper hero names in string array format
console.log(superhero.all); 

// To get super villain name
const supervillain = require('supervillains')

// Gives any one random super villain name
console.log('Super villain Name: ' + supervillain.random()); 

// Gives all supper villain names in string array format
console.log(supervillain.all);

