let word = 'night owl';
let reversedWord = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
  reversedWord += word[index];
}

console.log(reversedWord);
