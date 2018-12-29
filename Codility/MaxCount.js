/* 
    codility MaxCounter 문제
*/

function solution(N, A) {
    var arr = [];
    var curMax = 0;
    var nextMax = 0;

    for (var i = 0; i < N; i++) {
        arr.push(0);
    }

    for (var i = 0; i < A.length; i++) {
        var num = A[i];
        var index = num - 1;
     
        if (num < N + 1) {
            if (arr[index] <= curMax) {
                arr[index] = curMax;
            }
            arr[index]++;
            nextMax = Math.max(nextMax, arr[index]);
        } else {
            curMax = nextMax;
        }        
    }


    for (var j = 0; j < N; j++) {
        if(arr[j] < curMax){
            arr[j] = curMax;
        }
    }

    return arr
}


var array = [3, 4, 4, 6, 1, 6, 4];
console.log(solution(5, array));

