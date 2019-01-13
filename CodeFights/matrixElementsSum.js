function matrixElementsSum(matrix) {
    let columnCnt = matrix[0].length;
    let rowCnt = matrix.length;
    let record = [];
    let answer = 0;
    
    for(let i = 0; i < rowCnt; i++){
        for(let j = 0; j < columnCnt; j++){
            if(matrix[i][j] === 0){
                record.push([i,j]);
            }
        }
    }
    
    
    while(record.length){
        let room = record.shift();
        for(let k = room[0]; k < rowCnt; k++){
            matrix[k][room[1]] = 0;
        }
    }
    
    matrix.forEach(function(arr) {
        answer += arr.reduce((a,v) => {
            return a + v;
        }, 0)
    });
    
    return answer;
}
