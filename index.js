function sortString(s) {
  // Check if the input string is empty
  if (!s) return "";

  // Split the string into words
  const words = s.split(" ");

  // Map each word to an object containing the number and the word
  const indexedWords = words.map((word) => {
    // Find the digit in the word
    const number = parseInt(word.match(/\d/)[0], 10);
    return { number, word };
  });

  // Sort the array of objects based on the number
  indexedWords.sort((a, b) => a.number - b.number);

  // Extract the sorted words and join them into a result string
  const sortedWords = indexedWords.map((item) => item.word);
  return sortedWords.join(" ");
}

// Example usage:
const inputString = "word3 word1 word2";
console.log(sortString(inputString)); // Output: "word1 word2 word3"
