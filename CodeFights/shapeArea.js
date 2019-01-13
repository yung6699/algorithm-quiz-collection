/* 
  https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ/solutions
*/

function shapeArea(n) {
    if(n === 1) return n;
    
    const result = [];
    let size = 2*n - 1;
    let middleIndex = n - 1;
    let cnt = 1;
    result[middleIndex] = size
    
    for(let i = 0; i < middleIndex; i++){
        result[i] = cnt;
        result[size -i -1] = cnt;
        cnt += 2;
    }
    
    return result.reduce((a, v) => a + v);  
}
