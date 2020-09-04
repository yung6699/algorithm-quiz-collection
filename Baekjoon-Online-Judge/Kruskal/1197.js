/* 
  백준 1197번 최소 스패닝 트리
  https://www.acmicpc.net/problem/1197

  크루스칼 알고리즘이다.
*/

var input = require('fs').readFileSync('./dev/stdin').toString().split('\n');
var tmp = input.shift().split(' ').map(Number);
var N = tmp[0],
  M = tmp[1];

var parent = [];
var graph = [];

function getParent(x) {
  if (parent[x] == x) return x;
  return parent[x] = getParent(parent[x]);
}

function unionParent(a, b) {
  a = getParent(a);
  b = getParent(b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
}

function findParent(a, b) {
  a = getParent(a);
  b = getParent(b);
  if (a == b) return true;
  else return false;
}


for (var i = 0; i < M; i++) {
  var arr = input[i].split(' ').map(Number);
  graph.push(arr);
}

// 간선의 비용으로 오름차순 한다.
graph.sort(function (a, b) {
  return a[2] - b[2];
})

for (var i = 1; i <= N; i++) {
  parent[i] = i;
}

var sum = 0;
for (var i = 0; i < graph.length; i++) {
  var a = graph[i][0],
    b = graph[i][1]
  if (!findParent(a, b)) {
    sum += graph[i][2];
    unionParent(a, b);
  }
}


console.log(sum);