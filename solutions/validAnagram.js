
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



//************************************Solution 2: *******************************************


/*  

Here is another way to solve it using JavaScript... first, break up each word, sort the characters and join them all back together. Save this new word in a new variable for each. Then use an if condition the check if the sorted words are strictly equal. If they are, return true. If not, return false. I could even check the length of the words before sorting them to rule out if they are anagrams, before running any extra code 
"if (s.length !== t.length) return false;"

*/

var isAnagram1 = function(s, t) {

    let stringS = s.split("").sort().join("");
    let stringT = t.split("").sort().join("");

    if (stringS === stringT) return true;
    else return false;
    
};




/* ************************************Java Solution: *******************************************

First, to check if an int is equal to one another in Java we use == or != for not equal

Second, we can't just use chaining method to break up the word, sort it and put it back together. Instead, we have to create an array of char elements. You must declare the type of array, name it and set to to the word and use "toCharArray" method to split the word up

After you have the new arrays where each character of the words are their own element, you then sort the arrays. 

And lastly you must compare the sorted arrays by using equals method and passing in the sorted arrays to be compared. We are returning this equal method because it will return true or false based on if it is equal or not. 



class Solution {
    public boolean isAnagram(String s, String t) {

        if (s.length() != t.length()) return false;

        
        char[] sArr = s.toCharArray();
        char[] tArr = t.toCharArray();

        
        Arrays.sort(sArr);
        Arrays.sort(tArr);

        // Compare sorted arrays
        return Arrays.equals(sArr, tArr);
    }
}

*/