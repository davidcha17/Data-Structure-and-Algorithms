let arr = [2, 1, 2]

console.log(arr)

function findDuplicates(arr) {

    for(let i = 0; i < arr.length; i++) {
        let arrIndex1 = arr[i]
        let arrIndex2 = arr[i + 1]
        
    
        if(arrIndex1 - arrIndex2 === 0) return [arrIndex1, arrIndex2]
    }
    return false
    
}

findDuplicates(arr)