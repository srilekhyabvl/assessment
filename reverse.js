const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Enter a sentence ', (inputSentence) => {
    const words = inputSentence.split(' ');

// Reverse each word and store them in a new array
const reversedWords = words.map(word => {
  // Reverse the word using a simple loop
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
});

// Join the reversed words to form the reversed sentence
const reversedSentence = reversedWords.join(' ');

// Display the reversed sentence
console.log('Reversed Sentence: ' + reversedSentence);
});



