var N = 44;

function solution() {
  for (var i = 0; i < N; i++) {
    var str = '';
    for (var j = 0; j < (N-1)- i; j++) {
      str += " ";
    }
    for (var j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}

solution()