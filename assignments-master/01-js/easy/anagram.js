/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(one, two) {
  str1 = one.toUpperCase();
  str2 = two.toUpperCase();
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");
  let str1Size = str1Arr.length
  let str2Size = str2Arr.length
  //console.log(str1Size)
  if (str1Arr.length === str2Arr.length ) {
    for (let i = 0; i <= str1Size; i++) {
        for(let j = 0; j <= str2Size; j++ ){
              
              if(str1Arr[i] == str2Arr[j])
              str2Arr.splice(j, 1)
              str2Size = str2Arr.length
          }
    
    }
    if(str2Arr.length == 0) { 
      console.log("yes");
      return true
    } else {
      console.log("no")
      return false
    }
    
  } else {
                        console.log("no")
                        return false
  }
}

isAnagram('he llo', 'helol ')


module.exports = isAnagram;
