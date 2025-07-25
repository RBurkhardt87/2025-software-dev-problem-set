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