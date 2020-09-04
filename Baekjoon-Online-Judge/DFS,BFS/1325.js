/* 
  백준알고리즘 1325번 효율적인 해킹
  https://www.acmicpc.net/problem/1325
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var tmp = input.shift().split(' ').map(Number);
var N = tmp[0];
var graph = [];
var result = [];
var a = [];
var cnt = 0;
var max = 0;

function dfs(V, visited) {
  cnt += 1
  visited[V] = true;
  for (var i = 0; i < graph[V].length; i++) {
    if (visited[graph[V][i]] == undefined) {
      dfs(graph[V][i], visited)
    }
  }
}


for(var i = 1; i <= N; i++){
  graph[i] = [];
}


while(input.length){
  var tmp = input.shift().split(' ').map(Number);
  graph[tmp[1]].push(tmp[0])
}



for(var k = 1; k <= N; k++){
  dfs(k,[])
  if(max < cnt){
    max = cnt;
  }
  result[k] = cnt;
  cnt = 0;
}


for(var j = 1; j <= N; j++){
  if(max === result[j]){
    a.push(j);
  }
}

console.log(a.join(' '));









