/* 
  백준 알고리즘 1260번 DFS와 DFS|BFS
  https://www.acmicpc.net/problem/1260
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

function Graph() {
  this.vertices = {};
}

function Vertex() {
  this.edge = [];
  this.visited = false;
}


Graph.prototype.addVertex = function (value) {
  this.vertices[value] = new Vertex();
}

Graph.prototype.addEdge = function (v, w) {
  if (graph.vertices[v].edge.indexOf(w) === -1) {
    this.vertices[v].edge.push(w);
    this.vertices[w].edge.push(v);
  }
}

Graph.prototype.resetVisited = function (N) {
  for (var i = 1; i <= N; i++) {
    this.vertices[i].visited = false;
  }
}


Graph.prototype.bfs = function (V, result) {
  var queue = [V];
  var vertices = this.vertices;
  vertices[V].visited = true;


  while (queue.length) {
    var current = queue.shift();
    result.push(current)
    var array = vertices[current].edge;
    for (var i = 0; i < array.length; i++) {
      if (!vertices[array[i]].visited) {
        vertices[array[i]].visited = true;
        queue.push(array[i])
      }
    }
  }

  return result;
}

Graph.prototype.dfs = function (V, result) {
  var vertices = this.vertices;
  vertices[V].visited = true;
  result.push(V);
  var array = vertices[V].edge;
  for (var i = 0; i < array.length; i++) {
    if (!vertices[array[i]].visited) {
      this.dfs(array[i], result)
    }
  }
  return result;
}


var graph = new Graph();

var line1 = input[0].split(' ');
var N = line1[0] * 1,
  M = line1[1] * 1,
  V = line1[2] * 1;

for (var i = 1; i <= N; i++) {
  graph.addVertex(i);
}

for (var i = 1; i <= M; i++) {
  var temp = input[i].split(' ')
  graph.addEdge(parseInt(temp[0]), parseInt(temp[1]))
}

for (var key in graph.vertices) {
  graph.vertices[key].edge.sort(function (a, b) {
    return a - b;
  });
}

console.log(graph.dfs(V, []).join(' '));
graph.resetVisited(N)
console.log(graph.bfs(V, []).join(' '));
