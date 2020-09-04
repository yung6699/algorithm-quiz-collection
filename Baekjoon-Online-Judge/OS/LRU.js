/* 
  OS 페이징 교체 기법 알고리즘을 간단하게 구현해본것
  LRU 알고리즘
  카카오 3번 LRU : http://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/ 
*/

// var fs = require('fs');
// var input = fs.readFileSync('./dev/stdin').toString().split(' ');



function lruAlgorithm(input, cacheSize) {


  var memory = [];
  var curSize = 0; // 현재 차지하고 있는 메모리 크기
  var idx = 0;
  var t = 0; // 실행시간

  /* 
    페이지 적중시 실행시간 1,
    미적중시 : 5
  */

  if (cacheSize === 0) {

    t = 5 * input.length;

  } else {

    for (let i = 0; i < input.length; i++) {

      // 메모리에 적재된 페이지가 있는지 확인한다.
      var tmp = input[i].toLowerCase();
      idx = memory.map(v => v.value).indexOf(tmp)

      if (idx !== -1) { // 메모리에 적중된 페이지가 있을때
        memory[idx].time = 0;
        t += 1;

      } else { // 페이지 부재
        t += 5;

        if (curSize === cacheSize) { // 메모리가 꽉 차있다면

          var max = memory.reduce((a, b) => a.time > b.time ? a : b)
          idx = memory.map(v => v.value).indexOf(max.value);
          memory[idx] = {
            value: tmp,
            time: 0
          };

        } else if (curSize < cacheSize) { // 메모리에 공간이 있음 

          memory.push({
            value: tmp,
            time: 0
          })
          curSize++; // 현재 차지한 메모리 크기
        }
      }
      // 페이지 적재 후 시간 계산하기
      for (let j = 0; j < memory.length; j++) {
        if (memory[j] !== undefined) {
          memory[j].time += 1;
        }
      }
    }
  }
  console.log(t);
}


lruAlgorithm(["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"], 3) // 50
lruAlgorithm(["Jeju", "Pangyo", "seoul", "Jeju", "pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"], 3) // 21
lruAlgorithm(["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"], 2) // 60
lruAlgorithm(["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"], 5) // 52
lruAlgorithm(["Jeju", "Pangyo", "newYork", "NewYork"], 2) // 16
lruAlgorithm(["Jeju", "Pangyo", "Seoul", "NewYork", "LA"], 0) // 25