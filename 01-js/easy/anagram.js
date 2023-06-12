/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) return false;
  for(int i=0; i<str1.length/2;i++){
    if(str1[i]!=str2[str2.length-i-1]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
