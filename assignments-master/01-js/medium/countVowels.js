/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    lowerStr = str.toLowerCase();
    input = lowerStr.split("")
    let count = 0
    for(let i=0; i <= input.length; i++)
    { 
      if(input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u'){
        console.log(input[i])
      count++;
    }
    }
    return count;

}
countVowels("harEramA")
console.log(countVowels("hareramAE"));


module.exports = countVowels;