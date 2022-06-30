/*
Return the length of the longest word in the provided sentence.
Your response should be a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWordLength("May the force be with you") should return 5.
findLongestWordLength("Google do a barrel roll") should return 6.
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/

//#S1
function findLongestWordLength(str) {
  let longestWord = str.split(" ").sort((a, b) => b.length - a.length);
  return longestWord[0].length;
}

//#S2
function findLongestWordLength(str) {
  let longestWord = str.split(" ").map((word) => word.length);
  return Math.max(...longestWord);
}

//#S3
function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestWord = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }

  return longestWord;
}

//#4
function findLongestWordLength(str) {
  return str
    .split(" ")
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}

//#5
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
