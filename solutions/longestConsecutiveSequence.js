/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/


function longestConsecutive(nums) {

    //when you pass an array in as an argument of new Set, it removes any duplicate numbers
    const numSet = new Set(nums); 

    //this will keep track of the longest sequence, it will be update whenever a longer sequence is found
    let longest = 0;              

    //loop through every number element in the Set. 
    //You must use for... of loop -- SIDE NOTES: Sets are unordered collections of elements/data and so indexes don't apply. 
    //If you want to check how many elements are in a Set you use .size instead of .length
    for (let num of numSet) {  
        
        //if the numSet doesn't have (num - 1) then it is the start of a sequence. EXAMPLE: [1, 2, 4, 3]
        //if you are on 3, the condition will check-- does the numSet have (3-1), which is 2 and it does. So it isn't the start of the sequence.
        if (!numSet.has(num - 1)) {     
            
            //if it is the start of a sequence, set currentNum to num and start currentStreak off with 1
            let currentNum = num;
            let currentStreak = 1;

            //as long as the numSet has the currentName + 1, we increase the currentNum by 1 and add 1 to the streak. 
            while (numSet.has(currentNum + 1)) {  
                currentNum++;
                currentStreak++;
            }

            //this math method will pick the largest number of the two and store it as the longest.
            longest = Math.max(longest, currentStreak); 
        }
    }

    return longest;  
};

    