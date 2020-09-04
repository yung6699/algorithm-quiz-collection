/* 
  백준 알고리즘 1931번 회의실 배정
  https://www.acmicpc.net/problem/1931
  끝나는 시간을 기준으로 우선 정렬 후 만약 같은 값이면 시작 시간을 기준으로 한번 더 정렬한다.
*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0];
var schedule = [];

for (var i = 1; i <= N; i++) {
  var temp = input[i].split(' ');
  schedule.push([parseInt(temp[0]), parseInt(temp[1])]);
}

schedule.sort(function (a, b) {
  if (a[1] < b[1]) {
    return -1;
  } else if (a[1] > b[1]) {
    return 1;
  } else {
    if (a[0] < b[0]) { 
      return -1;
    } else if (a[0] > b[0]) { 
      return 1;
    } else {
      return 0;
    }
  }
});

function solution(schedule) {

  var count = 0;
  var last = 0;

  for (var i = 0; i < N; i++) {
    var meetingBegin = schedule[i][0];
    var meetingEnd = schedule[i][1];
    if (last <= meetingBegin) {
      last = meetingEnd;
      count++;
    }
  }

  console.log(count);
}

solution(schedule)
