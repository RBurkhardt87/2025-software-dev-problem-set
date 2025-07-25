/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]



Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
*/

let nums1 = [1,1,1,2,2,3];
let k1 = 2;

let nums2 = [1];
let k2 = 1;

function topKFrequent(nums, k) {

  let map = new Map();

  for (let i = 0; i <nums.length; i++) {

    let num = nums[i];

    if (map.has(num)){
        map.set(num, map.get(num) + 1);
    } else {
        map.set(num, 1);
    }
  }  

   let sorted = [...map.entries()].sort((a,b) => b[1] - a[1]);

   return sorted.slice(0, k).map(entry => entry[0]); 

};

console.log(topKFrequent(nums1,k1));
console.log(topKFrequent(nums2,k2));