// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
var input = 10;
function fibonacci(n){;
  var array = new Array(n+1);
  array[0] = 0;
  array[1] = 1;
  for(var i = 2; i <= n; i++ ){
    array[i] = array[i-1] + array[i-2];
  }
  console.log(array);
  console.log(array.pop());
}
fibonacci(parseInt(input));
