var input = require("readline-sync");

var text = input.question("Syötä sana: ");

function reverseString(text) {
  let newText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newText += text[i];
  }
  return newText;
}

function isPalindrome(text) {
  if (text.length > 0) {
    const reversedText = reverseString(text);
    return reversedText === text;
  }

  return false;
}

console.log(
  isPalindrome(text) ? "Kyseessä on palindrome" : "Kyseessä ei ole palindrome"
);
