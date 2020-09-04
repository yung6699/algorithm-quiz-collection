/* 
  백준 알고리즘 1966번 프린터 큐
  https://www.acmicpc.net/problem/1966

  3  // 테스트 케이스 수
  1 0 // 문서의수, 몇번째로 인쇄되었는지 궁금한 문서의 큐 인덱스
  5 // N 개의 문서의 중요도
  4 2 
  1 2 3 4
  6 0
  1 1 9 1 1 1

*/

var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var testN = input[0]  // tase case 수
input = input.slice(1);

var cases = [];
for(var i = 0; i < testN; i++){
  var temp = input[2*i].split(' '); // 문서의 수, 인덱스
  var temp2 = input[2*i + 1].split(' '); // 중요도
  var imp = []

  for(var j = 0, max =temp2.length; j < max; j++){
    imp.push({
      value : parseInt(temp2[j]),
      check : false
    })
  }

  imp[temp[1]].check = true;

  var testCase = { imp : imp };
  cases.push(testCase);
}


function solution(){
  for(var index in cases){
      var array = cases[index].imp;
      var count = 0;
      var max = -1;

      while(1){
        if( max === -1 ){
          var max = array.reduce( function (previous, current) { 
            return (previous.value > current.value) ? previous : current;
          });
        }
        
        var n = array.shift(); // imp의 앞의 값을 꺼낸다.

        if(n.value !== max.value){
          array.push(n);
        } else if(n.value === max.value) {
          count++;  // 완전히 빠지면 순서 카운팅
          max = -1; // 다시 최대 값을 찾기 위해 초기화
          if(n.check){ break; }
        }
      }
      console.log(count); 
  }
}

solution()