/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 
Example 1:

Input: nums1 = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.



Example 2:

Input: nums2 = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.



Example 3:

Input: nums3 = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/


let nums1 = [1,2,3,1]

let nums2 = [1,2,3,4]

let nums3 = [1,1,1,3,3,4,3,2,4,2]

function containsDuplicate(nums) {
            let numsHashMap = new Map();

        for (let num of nums){
            if (!numsHashMap.has(num)) {
                numsHashMap.set(num);
            } else {
                return true;
            }
        }
        return false;
};

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));