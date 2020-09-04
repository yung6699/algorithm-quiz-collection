/* 
  위상정렬
  방문할 그래프 정점을 정렬한다.
  단 사이클이 있을 때는 불가능 하다.
*/


var N = 7

var graph = [];
var inDegree = [];
var result = [];

// 정점을 추가한다.
for (var i = 0; i <= N; i++) {
  graph.push([]);
  inDegree.push(0);
}


function topologySort() {
  var queue = [];

  for (var i = 1; i <= N; i++) {
    if (inDegree[i] == 0) queue.push(i)
  }


  for (var i = 1; i <= N; i++) {

    var current = queue.shift();
    result[i] = current;

    var array = graph[current];

    for (var j = 0; j < array.length; j++) {
      inDegree[array[j]]--;
      if (inDegree[array[j]] == 0) {
        queue.push(array[j])
      }
    }
  }
}

graph[1].push(2);
inDegree[2]++; 
graph[1].push(5);
inDegree[5]++; 
graph[2].push(3);
inDegree[3]++; 
graph[3].push(4);
inDegree[4]++; 
graph[4].push(6);
inDegree[6]++; 
graph[5].push(6);
inDegree[6]++; 
graph[6].push(7);
inDegree[7]++;

topologySort()
console.log(result);

// for (var i = 1; i <= N; i++) {
//   console.log(result[i]);
// }