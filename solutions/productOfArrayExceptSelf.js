/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]



Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

let nums1 = [1,2,3,4]

let num2 = [-1,1,0,-3,3]




//NOTE: this is the best way to look at it in my opinion. I wrote out the loops...
    
function prodExceptSelf(nums) {

    let prefix = 1;
    let suffix = 1;
    let answer = new Array(nums.length).fill(1);

    //start from the left
    for (let i = 0; i < nums.length; i++) {
        answer[i] = answer[i] * prefix;
        prefix = prefix * nums[i];
    }
 
    //nums Array [ 1, 2, 3, 4 ]
    //Answer Array [ 1 , 1 , 2 , 6 ]
    //Loop One: 1 x 1 = 1, prefix = 1
    //Loop Two: 1 x 1 =1 , prefix = 2
    //Loop Three: 1 x 2 = 2 , prefix = 6
    //Loop Four : 1 x 6 = 6, prefix = 24

    //start from the right
    for (let i = nums.length -1; i >= 0; i--){
        answer[i] = answer[i] * suffix;
        suffix = suffix * nums[i]
    }

    //nums Array [ 1, 2, 3, 4 ]
    //answer Array [ 1, 1, 2, 6 ]

    //Loop one: 6 x 1 = 6 , prefix = 4
    //Loop two: 2 x 4 = 8 , prefix = 12
    //Loop three: 1 x 12 = 12, prefix = 24
    //Loop four: 1 x 24 = 24, prefix = 24

    return answer;

};



//NOTE: This is the same code, just explained a little differently...

function productExceptSelf(nums) {


    //you start with one because you don't want the first element to be multiplied by anything and 1 is a default. 
    //Example: [1,2,3,4]
    // 1 x 1 = 1 
    let prefix = 1;

    //here you are just creating an array that is the same length as the argument and filling it with 1's to be safe since we are multiplying
    let answer = new Array(nums.length).fill(1);

    //begin at the first element and increment by one. 
    for (let i = 0; i < nums.length; i++) { 
        answer[i] = answer[i] * prefix;
        prefix = prefix * nums[i];
    }
    console.log("After the first loop: " , answer);

    //same as the prefix, we don't want the last element to be multiplied by itself-- we use 1 as a default. 
    let suffix = 1;

    //start at the last element and decrement by one.
    for (let i =nums.length - 1; i >= 0; i--){
        answer[i] = answer[i] * suffix;
        suffix = suffix * nums[i];
    }

    console.log("After the second loop: ", answer);

    return answer;
};

console.log(productExceptSelf(nums1));
console.log(productExceptSelf(num2));



//NOTE: this way uses to arrays, instead of one -- however, it is only returning one array


function productOfArrayExceptSelf(nums){

    //make the left array, and start that array with a 1 at the first index of 0
    const left = new Array(nums.length).fill(0);
    left[0] = 1;

    //make the right array, and end that array with a 1 at the last index of array (length - 1)
    const right = new Array(nums.length).fill(0);
    right[nums.length - 1] = 1;

     
    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    for (let i = right.length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = left[i] * right[i];
    }

    return nums;
};