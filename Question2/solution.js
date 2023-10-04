function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)];
        }
    }

    // In case there is no solution, we'll just return null
    return null;
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Expected output: [0, 1] (because nums[0] + nums[1] == 9)

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Expected output: [1, 2] (because nums[1] + nums[2] == 6)

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Expected output: [0, 1] (because nums[0] + nums[1] == 6)

const nums4 = [1, 2, 3, 4, 5];
const target4 = 10;
console.log(twoSum(nums4, target4)); // Expected output: null

const nums5 = [2, 4, 6, 8, 10];
const target5 = 14;
console.log(twoSum(nums5, target5)); // Expected output: [1, 3] (because nums[1] + nums[3] == 14)

const nums6 = [];
const target6 = 5;
console.log(twoSum(nums6, target6)); // Expected output: null