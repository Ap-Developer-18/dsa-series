//  Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
let nums = [1, 2, 3, 3];
let isTrue;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      isTrue = true;
    } else {
      isTrue = false;
    }
  }
}

console.log(isTrue);
