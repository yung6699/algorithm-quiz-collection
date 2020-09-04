/* 
  백준 알고리즘 2839 설탕배달
  https://www.acmicpc.net/problem/2839

  봉지를 최대한 적게 사용하려면 5kg 봉지를 최대한 많이 써야 한다.
  즉, 남아있는 설탕이 5의 배수라면 5kg 봉지만으로 담으면 된다.
  5kg 봉지의 갯수를 늘려가며 찾아갈 수도 있지만, 반대로 설탕에서 3kg씩 점점 빼가며 5의 배수를 찾아가는 방법도 있다.
  3kg씩 빼가다가 남은 양이 5의 배수라면 남은 설탕은 5kg에 담으면 되고, 0이라면 5kg 봉지를 쓸 수 없던 것이고, 음수가 된다면 설탕을 담을 방법이 없다는 것이다.

*/


var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().split('\n');
var N = input[0];

function solution(N){
  var count = 0;
  while(1){
    if(N % 5 === 0){
      console.log(Math.floor(N/5)+count);
      break;
    } else if ( N <= 0){
      console.log(-1);
      break;
    }
    N = N - 3;
    count++;
  }
}

solution(N);