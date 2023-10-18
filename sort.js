const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Enter a input sentence separated by commas ',(inputString)=>{
    // Split the input string into an array
const inputArray = inputString.split(",").map(Number);

// Sort the array in descending order
inputArray.sort(function(a, b) {
  return b - a;
});

// Display the sorted array
console.log("Sorted Array in Descending Order: " + inputArray);
});