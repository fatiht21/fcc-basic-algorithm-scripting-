/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
mutation(["ate", "date"]) should return false.
mutation(["Tiger", "Zebra"]) should return false.
mutation(["Noel", "Ole"]) should return true.
*/
function mutation(arr) {
  // let firstWord = arr[0].toLowerCase();
  // let secondWord = arr[1].toLowerCase();

  // for( let i = 0; i < secondWord.length; i++ ) {
  //     if(firstWord.indexOf(secondWord[i]) == -1) {
  //      return false;
  //     }
  // }
  // return true;
  return arr[1]
    .toLowerCase()
    .split("")
    .every((letter) => {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

console.log(mutation(["Alien", "line"]));
