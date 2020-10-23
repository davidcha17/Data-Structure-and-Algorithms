const leetSolution = function(nums1, nums2) {
    let median;
    let res_arr = nums1.concat(nums2).sort((a,b)=>a-b);
    res_arr.length%2===1 ? median = res_arr[(res_arr.length-1)/2] 
                            : 
                            median = (res_arr[res_arr.length/2-1]+res_arr[res_arr.length/2])/2;
    return median
};

// const mySolution = function(nums1, nums2) {
//     let newArray = [];
//     let newLength = 0;
    
//     if(nums1.length > nums2.length) {
//         newLength = nums1.length;
//     } else {
//         newLength = nums2.length;
//     }
    
//     for(let i = 0; i < newLength; i++) {
//         if(nums1[i]) {
//             newArray.push(nums1[i]);
//         }
//         if(nums2[i]) {
//             newArray.push(nums2[i]);
//         }
//     }
//     let start = newArray[0];
//     let end = newArray.length;
//     let medium = 0;
    
//     while(start <= end) {
//         if(start === end) {
//             medium = start;
//         } else {
//             medium = (start + end) / 2;
//         } 
//         medium = medium ? medium : 0;
//         start++
//         end--
//     }
//     return medium;
//     // my solution is almost there, I got the arrays to merge without hitting undefined and now
//     // the problem is going through that single array and looking for the median of the array

        // there is another problem for the third test case, when i push the nums[i] into the newArray
        // the values do not get pushed in and becomes undefined
// };

let firstTest = leetSolution([1, 2], [3])
let secondTest = leetSolution([1, 2], [3, 4])
let thirdTest = leetSolution([0, 0], [0, 0])
let fourthTest = leetSolution([], [1])
let fifthTest = leetSolution([2], [])

// let firstTest1 = mySolution([1, 2], [3])
// let secondTest2 = mySolution([1, 2], [3, 4])
// let thirdTest3 = mySolution([0, 0], [0, 0])
// let fourthTest4 = mySolution([], [1])
// let fifthTest5 = mySolution([2], [])

let properCode = function(nums1, nums2) {
    let totalLen = nums1.length + nums2.length; 
    let idx1 = 0;
    let idx2 = 0;

    let curr;
    let last;

    while(idx1 + idx2 <= totalLen / 2) {
        if(curr !== undefined) {
            last = curr;
        }
        let elOne = nums1[idx2];
        let elTwo = nums2[idx2];
        console.log(elOne, elTwo, "element one and two")
        if (elOne === undefined) {
            curr = elTwo;
            idx2++;
          } else if (elTwo === undefined) {
            curr = elOne;
            idx1++;
          } else if (elOne < elTwo) {
            curr = elOne;
            idx1++;
          } else {
            curr = elTwo;
            idx2++;
          }
        }
    return totalLen % 2 === 0 ? (last + curr) / 2 : curr;
}

// let Test1 = properCode([1, 2], [3])
let Test2 = properCode([1, 2], [3, 4])
// let Test3 = properCode([0, 0], [0, 0])
// let Test4 = properCode([], [1])
// let Test5 = properCode([2], [])
