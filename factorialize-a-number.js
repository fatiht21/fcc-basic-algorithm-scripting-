/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

Passed:factorialize(5) should return a number.
Passed:factorialize(5) should return 120.
Passed:factorialize(10) should return 3628800.
Passed:factorialize(20) should return 2432902008176640000.
Passed:factorialize(0) should return 1.
*/

//#S1

function factorialize(num) {
  let faktorial = 1;

  for (let i = 1; i <= num; i++) {
    faktorial *= i;
  }
  return faktorial;
}

factorialize(5);

//#S2
//Recursion
function factorialize(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

//#S3
function factorialize(num) {
  return num < 0
    ? 1
    : new Array(num)
        .fill(undefined)
        .reduce((total, _, index) => total * (index + 1), 1);
}

factorialize(5);
