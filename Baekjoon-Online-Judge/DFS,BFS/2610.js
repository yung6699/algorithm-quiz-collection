/* 
  백준알고리즘 2610번 회의준비
  https://www.acmicpc.net/problem/2610
*/


var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var N = Number(input.shift()), M = Number(input.shift());
var graph = [];
var visited = [];
var groups = [];
var result = [];
var gnum = 0;

for (var i = 1; i <= N; i++) {
  graph[i] = [];
  groups[i] = [];
  visited[i] = false;
}

for (var j = 0; j < M; j++) {
  var arr = input[j].split(' ').map(Number);
  graph[arr[0]].push(arr[1]);
  graph[arr[1]].push(arr[0]);
}

function dfs(start) {
  var arr = graph[start];
  visited[start] = true;
  groups[gnum].push(start)
  for (var i = 0; i < arr.length; i++) {
    if (!visited[arr[i]]) {
      dfs(arr[i])
    }
  }
}

for (var i = 1; i <= N; i++) {
  if (!visited[i]) {
    gnum++;
    dfs(i);
  }
}


function bfs(g) {

  for (var k = 1; k <= gnum; k++) {
    var small = Infinity;
    var snum;
    var group = g[k];
    for (var j = 0; j < group.length; j++) {
      var dis = [];
      var tot = 0; // 총거리
      var queue = [];
      var start = group[j];

      for (var i = 1; i <= N; i++) {
        dis[i] = 0;
      }

      queue.push(start);

      while (queue.length) {
        var cur = queue.shift();
        for (var i = 0; i < graph[cur].length; i++) {
          var there = graph[cur][i];
          if (dis[there] == 0) {
            dis[there] = dis[cur] + 1;
            tot += dis[there]
            queue.push(there);
          }
        }
      }

      if (tot < small) {
        small = tot;
        snum = start;
      }
    }

    result.push(snum);
  }
}



bfs(groups);
result.sort(function (a, b) {
  return a - b;
})

console.log(gnum);
console.log(result.join('\n'));