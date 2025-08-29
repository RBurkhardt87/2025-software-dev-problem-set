/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]



Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

let nums1 = [2,7,11,15]
let target1 = 9

let nums2 = [3,2,4]
let target2 = 6

let nums3 = [3,3]
let target3 = 6


function twoSum(nums, target) {

    let output = [];

    
        for (let i = 0; i < nums.length; i++){
            for (let j = 0; j < nums.length; j++) {
                if ( i !== j) {
                    if (nums[i] + nums[j] === target) {
                        output.push(i);
                        output.push(j);
                        return output;
                    }  
                }               
      
            }
        }       
   
};

console.log(twoSum(nums1, target1));

console.log(twoSum(nums2, target2));

console.log(twoSum(nums3, target3));


/* **************************************** JS Solution 2 ************************************************

First, since we need to find the indices we will use a map to track index and value. 

Second, create a for loop to iterate over the nums array

Third, set num to the element value to make it cleaner 

Fourth, store the target - num in a variable called complementary -- this is the number we will search for in our map

Fifth, write an if condition that checks if the complementary number is in our map. If it is, we want to return the index of the complementary number and the index of the number we are iterating over that adds to the complementary to hit the target. 

If the complementary isn't in the map, we want to set it in the map to be checked on our next iteration. We know that there will be a solution, which makes this solution work...

NOTE: we are using "has" not "contains" since we in JS and not Java. 




var twoSum = function(nums, target) {

    let map = new Map();

    for (let  i =0; i < nums.length; i++){

        let num = nums[i];
        let complementary = target - num;

        if (map.has(complementary)){
            return [map.get(complementary), i];          
        }
        map.set (num, i);       
    }
};



*/


/* ************************************************ Java Solution ***************************************


First, in Java we must declare a map has HashMap and the variable types must be defined in this strictly typed language

Second, in the if condition -- Java uses containsKey method to check to make sure there is a complementary key in the map

Third, when returning -- we create a new array of integers and following the ints in {} after the declaration. We get the indices the same way as we would in JS

Fourth, in Java we use "put" instead of "set" to add a key/value pair to our map

Fifth, although the problem says there will always be a solution -- Java is strictly typed (public int[]), therefore, we must have an option to return an empty array just in case. Since there is a solution to the problem always -- the return new int[]{} will never actually be reached. 

class Solution {
    public int[] twoSum(int[] nums, int target) {

        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++){
            int num = nums[i];
            int complementary = target - num;

            if ( map.containsKey(complementary)){
                return new int[]{map.get(complementary), i};
            }
            map.put(num, i); 
        } 
        return new int[]{}; 
    }
}


*/