/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string

Passed:reverseString("hello") should return a string.
Passed:reverseString("hello") should return the string olleh.
Passed:reverseString("Howdy") should return the string ydwoH.
Passed:reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.

*/

//S#1

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));

//S#2
function reverseString(str) {
  let arrLetters = str.split("");
  let revArr = arrLetters.reverse();
  let joinedStr = revArr.join("");
  return joinedStr;
}

//S#3
function reverseString(str) {
  return str.split("").reverse().join("");
}
