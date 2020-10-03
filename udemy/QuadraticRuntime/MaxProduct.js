function maxProductMinusOne(arr) {
    let maxProduct = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(maxProduct < (arr[i] - 1) * (arr[j] - 1)) {
                maxProduct = (arr[i] - 1) * (arr[j] - 1);
            }
        }
    }
    return maxProduct;
}