/* 
  백준알고리즘 2644번 촌수계산
  https://www.acmicpc.net/problem/2644 DFS
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

Graph.prototype.dfs = function (V, cnt) {

  if (end == V) {
    ans = cnt;
    return;
  }
  var vertices = this.vertices;
  vertices[V].visited = true;

  var array = vertices[V].edge;

  for (var i = 0; i < array.length; i++) {
    if (!vertices[array[i]].visited) {
      this.dfs(array[i], cnt + 1)
    }
  }
}

var input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
var N = Number(input.shift()); // 정점 수
var arr = input.shift().split(' ').map(Number); //시작점, 끝점
var start = arr[0],
  end = arr[1];
var M = Number(input.shift()); // 간선의 수

var graph = new Graph();
var ans = 0;

// 정점을 추가한다.
for (var i = 1; i <= N; i++) {
  graph.addVertex(i);
}

// 간선을 추가한다.
for (var i = 0; i < M; i++) {
  var edge = input[i].split(' ').map(Number);
  graph.addEdge(edge[0], edge[1])
}


graph.dfs(start, 0);
console.log((ans != 0) ? ans : -1);