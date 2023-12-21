/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");
  if (str1Arr.length === str2Arr.length ) {
    for (let i = 0; i <= str1Arr.length; i++) {
      for(let j = 0; j <= str2Arr.length; j++ ){
      if(str1Arr[i] != str2Arr[j]) {
        // console.log(str1[i] + str2[j])
        continue;
      } else if(str1Arr[i] === str2Arr[j]) {
        str1Arr.pop(str1Arr[i])
        str2Arr.pop(str2Arr[j])
        console.log(str1Arr+" "+str2Arr)

      }  else {
        console.log("Strings are not Anagram")
      }
    }
    }
    if(str1Arr.length == 0 && str2Arr.length == 0) {
      console.log("Strings are Anagram");
    }
  } else {
    console.log("Strings are Not Anagram");
  }
}

isAnagram("help", "pelh")
module.exports = isAnagram;
