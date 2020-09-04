/* 
  크루스칼 알고리즘

  가장 적은 비용으로 모든 노드를 연결하기 위해 사용하는 알고리즘이다.
  최소 비용 신장 트리를 만드는 알고리즘이다. 각 노드를 최소한의 비용으로 연결 할 때 적용
*/

var N = 7; // 노드 개수
var M = 11; // 간선 개수

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


graph.push([1, 7, 12])
graph.push([1, 4, 28])
graph.push([1, 2, 67])
graph.push([1, 5, 17])
graph.push([2, 4, 24])
graph.push([2, 5, 62])
graph.push([3, 5, 20])
graph.push([3, 6, 37])
graph.push([4, 7, 13])
graph.push([5, 6, 45])
graph.push([5, 7, 73])


// 간선의 비용으로 오름차순 한다.
graph.sort(function(a,b){
  return a[2] - b[2];
})

for (var i = 1; i <= N; i++) {
  parent[i] = i;
}

var sum = 0;
for(var i = 0; i < graph.length; i++){
  var a = graph[i][0], b = graph[i][1]
  if(!findParent(a, b)){
    sum += graph[i][2];
    unionParent(a, b);
  }
}

console.log(graph);
console.log(parent);
console.log(sum);