/* 
  백준알고리즘 2606번 바이러스
  https://www.acmicpc.net/problem/2606
*/

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

Graph.prototype.bfs = function (V) {
  var queue = [V];
  var result = [];
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

  console.log(result.length-1);
}


var input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
var N = Number(input.shift()); // 컴퓨터의 수
var M = Number(input.shift()); // 컴퓨터의 쌍의 수

var graph = new Graph();

// 정점을 추가한다.
for (var i = 1; i <= N; i++) {
  graph.addVertex(i);
}

// 간선을 추가한다.
for (var i = 0; i < M; i++) {
  var edge = input[i].split(' ').map(function(v){return Number(v)});
  graph.addEdge(edge[0], edge[1])
}

graph.bfs(1);
