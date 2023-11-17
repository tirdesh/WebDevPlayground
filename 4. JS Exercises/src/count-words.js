/**
 * This function counts all the words in the input sentence and returns an object
 * with the word as the key and count as the value.
 *
 * @param {String} sentence - The input sentence.
 * @return {Object} An object with word-count pairs.
 */
export const countWords = sentence => {
  // Split the sentence into words using spaces as a delimiter
  const words = sentence.toLowerCase().split(' ');
  //const word_s = sentence.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' ');
  // Create an object to store word counts
  const wordCount = {};

  // Iterate through the words and count them
  for (const word of words) {
    // If the word is not empty, increment its count in the object
    if (word !== '') {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  }
  return wordCount;
};

console.log(countWords("Welcome welcome to damn to Programiz"));
