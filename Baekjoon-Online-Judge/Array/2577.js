var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
var N = input.shift();
N = N * 1; 


for(var i = 0; i < N; i++){
  var arr = input[i].split('X');
  var sum = 0;
  for(var j = 0, max = arr.length; j < max; j++){
    if(arr[j]){
      var temp = arr[j].length;
      sum += Math.floor((temp + 1) * temp / 2)
    }
  }
  console.log(sum);
}
