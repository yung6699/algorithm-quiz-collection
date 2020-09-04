/* 
    구간합 구하기 ( 바이너리 인덱스 트리 )
    https://www.acmicpc.net/problem/2042
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var tmp = input.shift().split(' ').map(Number);
var N  = tmp[0], M = tmp[1], K = tmp[2];
var arr = [];
var tree = [0];

for(var i = 0; i < N; i++){
    tree[i+1] = 0;
    arr.push(Number(input.shift()));
}

// 1에서 부터 특정 값까지의 합
function sum(v) {
    var result = 0;
    while (v > 0) {
        result += tree[v];
        v -= (v & -v);
    }
    return result;
}


function update(v, dis, bool) {
    
    if(bool){ // 값을 바꾸는 경우 true, 처음 트리를 만드는 경우 false
        dis = dis  - tree[v];
    }

    while (v <= N) {
        tree[v] += dis;
        v += (v & -v);
    }
}


function getSection(start, end) {
    console.log(sum(end) - sum(start - 1));
}



for(var i = 0; i < N; i++){
    update(i+1, arr[i], false)
}


while(input.length){
    var tmp = input.shift().split(' ').map(Number);
    (tmp[0] === 1) ? update(tmp[1], tmp[2], true) : getSection(tmp[1],tmp[2])
}