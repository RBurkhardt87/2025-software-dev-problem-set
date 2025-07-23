
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true



Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

let s = "anagram", t = "nagaram";

let s1 = "rat", t1 = "car";

function isAnagram(s, t) {

    //I need to break up the words by characters
    //There will need to be a loop over each array of characters for both words

    let wordS = s.split("");
    let wordT = t.split("");

    console.log(wordS);
    console.log(wordT);

    //I now have two arrays with the characters of each word as an element

    //first, if the words aren't the same length, they aren't anagrams...

    if (wordS.length !== wordT.length){
        return false;
    }
    
    //If I take the first word and put it in a hashmap. I should be able to loop over the second word and check to see if the characters match. If a new one pops up return false right away
    let wordSMap = new Map();

    for (let char of wordS) {
        wordSMap.set(char);
    }

    for (let char of wordT) {
        if(!wordSMap.has(char)) {
            return false;
        } else return true;
    }
};

console.log(isAnagram(s,t));
console.log(isAnagram(s1,t1));