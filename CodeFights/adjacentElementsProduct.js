
function adjacentElementsProduct(inputArray) {
    let max = null;
    for(let i = 0; i < inputArray.length -1; i++){
        let sum = inputArray[i] * inputArray[i+1]
        if(max === null || max < sum) {
            max = sum;
        }
    }
    
    return max;
}
