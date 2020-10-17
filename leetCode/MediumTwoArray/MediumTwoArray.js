const findMedianSortedArrays = function(nums1, nums2) {
    let median;
    let res_arr = nums1.concat(nums2).sort((a,b)=>a-b);
    res_arr.length%2===1 ? median = res_arr[(res_arr.length-1)/2] 
                            : 
                            median =(res_arr[res_arr.length/2-1]+res_arr[res_arr.length/2])/2;
    return median
};

let firstTest = findMedianSortedArrays([1, 2], [3])
let secondTest = findMedianSortedArrays([1, 2], [3, 4])
let thirdTest = findMedianSortedArrays([0, 0], [0, 0])
let fourthTest = findMedianSortedArrays([], [1])
let fifthTest = findMedianSortedArrays([2], [])
