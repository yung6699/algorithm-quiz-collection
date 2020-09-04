function solution(N, stages) {

    var answer = [];
    var result = []
    var size = stages.length;
    var record = {};

    for(var i = 0; i < size; i++){
        var num = stages[i];
        if(!record[num]){
            record[num] = 1;
        } else {
            record[num] = record[num] + 1;
        }
    }

    for(var i = 1; i <= N + 1; i++){
        var k = record[i];
        var tmp = null;
   
        if(i > N) {
            continue;
        }

        if(k === undefined){
           tmp = 0 
        } else {
            tmp = (k / size);
            size = size - k;
        }   
             
        result.push([i, tmp]);
     
    }

    result.sort((a,b) => {
       return b[1] - a[1] || a[0] - b[0]
    })

    for(var i = 0; i < result.length; i++){
        answer.push(result[i][0])
    }


    return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// solution(4, [4,4,4,4,4]	);