const palindromes = function (word) {
  let cleanedWord = getLowerCaseLetters(word);
  let reversedWord = cleanedWord.split("").reverse().join("");
  return cleanedWord === reversedWord;
};

function getLowerCaseLetters(word) {
  return word.slice().split("").filter(isLetterOrNumber).join("").toLowerCase();
}

function isLetterOrNumber(char) {
  return (
    (char >= "0" && char <= "9") ||
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z")
  );
}

// Do not edit below this line
module.exports = palindromes;
