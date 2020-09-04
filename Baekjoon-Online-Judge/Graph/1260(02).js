/* 
  백준 알고리즘 1260번 DFS와 BFS
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

function Graph(){
  this.adjacency = [];
}

Graph.prototype.makeMatrix = function(N){
  for(var i = 0; i <= N; i++){
    var array = []
    for(var j = 0; j <= N; j++){
      array.push(0);
    }
    this.adjacency.push(array)
  }
}

Graph.prototype.addEdge = function(v,w){
  this.adjacency[v][w] = 1
  this.adjacency[w][v] = 1
}

Graph.prototype.dfs = function(V, visited, result){
  visited[V] = true;
  result.push(V);
  for(var i = 1; i <= N; i++){
    if(this.adjacency[V][i] === 1 && !visited[i]){
      this.dfs(i, visited,result)
    }
  }
  return result;
}

Graph.prototype.bfs = function(V, visited, result){
  var queue = [];
  queue.push(V);
  visited[V] = true;

  while(queue.length){
    var current = queue.shift();
    result.push(current);
    for(var i = 1; i <= N; i++){
      if(!visited[i] && this.adjacency[current][i] === 1){
        visited[i] = true;
        queue.push(i)
      }
    }
  }

  return result;
}


var graph = new Graph();

var line1 = input[0].split(' ');
var N = line1[0] * 1,
  M = line1[1] * 1,
  V = line1[2] * 1;

graph.makeMatrix(N);

for (var i = 1; i <= M; i++) {
  var temp = input[i].split(' ')
  graph.addEdge(temp[0], temp[1])
}

console.log(graph.dfs(1, [], []).join(' '));
console.log(graph.bfs(1, [], []).join(' '));
