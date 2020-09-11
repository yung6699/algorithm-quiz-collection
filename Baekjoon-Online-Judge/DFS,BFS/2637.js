/*
  백준알고리즘 2637번 장난감 조립
    https://www.acmicpc.net/problem/2637
  DFS, DFS|BFS 둘다 가능하다.
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = Number(input.shift());
var M = Number(input.shift());
var graph = [];
var result = [];

for (var i = 1; i <= N; i++) {
  graph[i] = []
}

for (var i = 0; i < M; i++) {
  var tmp = input[i].split(' ').map(Number);
  graph[tmp[0]][tmp[1]] = tmp[2];
  result[i] = 0;
}

function dfs(n, s) {
  var splited = false;
  for (var i = 1; i < N; i++) {
    if (graph[n][i]) {
      splited = true;
      var su = graph[n][i];
      dfs(i, s * su);
    }
  }
  if (splited == false) result[n] += s;
}

console.log(graph);

dfs(N, 1);

for(var i = 1; i < N; i++){
  if(result[i] !== 0){
    console.log(i, result[i]);
  }
}
