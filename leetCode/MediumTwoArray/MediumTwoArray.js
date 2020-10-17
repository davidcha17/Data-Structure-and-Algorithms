const leetSolution = function(nums1, nums2) {
    let median;
    let res_arr = nums1.concat(nums2).sort((a,b)=>a-b);
    res_arr.length%2===1 ? median = res_arr[(res_arr.length-1)/2] 
                            : 
                            median =(res_arr[res_arr.length/2-1]+res_arr[res_arr.length/2])/2;
    return median
};

const mySolution = function(nums1, nums2) {
    let newArray = [];
    let newLength = 0;
    
    if(nums1.length > nums2.length) {
        newLength = nums1.length;
    } else {
        newLength = nums2.length;
    }
    
    for(let i = 0; i < newLength; i++) {
        if(nums1[i]) {
            newArray.push(nums1[i]);
        }
        if(nums2[i]) {
            newArray.push(nums2[i]);
        }
    }
    let start = newArray[0];
    let end = newArray.length;
    let medium = 0;
    
    while(start !== end) {
        // console.log(newArray)
        // console.log(start, end)
        if(start === end) {
            medium = start;
            console.log(medium)
        }
        start++;
        end--;
    }
    // return medium;
    // my solution is almost there, I got the arrays to merge without hitting undefined and now
    // the problem is going through that single array and looking for the median of the array
};

let firstTest = leetSolution([1, 2], [3])
let secondTest = leetSolution([1, 2], [3, 4])
let thirdTest = leetSolution([0, 0], [0, 0])
let fourthTest = leetSolution([], [1])
let fifthTest = leetSolution([2], [])
