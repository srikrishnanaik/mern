/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  input = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").replaceAll(/\s/g,'');
  strCheck = input.split("");
  console.log(strCheck);
  let j = strCheck.length-1;
  for(let i=0; i <= Math.floor(strCheck.length/2); i++){
  if(strCheck[i] == strCheck[j]) {
    console.log(strCheck[i]+" "+strCheck[j]);
    j--;
  } else{
    return false
  }
  }
  return true
}
console.log(isPalindrome("Eva, can I see bees in a cave?"));
module.exports = isPalindrome;
