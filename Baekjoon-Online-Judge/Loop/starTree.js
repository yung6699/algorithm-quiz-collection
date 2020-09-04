/* 
  별찍기 번외편
  별찍기로 트리 만들기
*/
var N = 30;
function solution() {
  var loopCount = Math.floor(N / 3)
  var temp = loopCount;
  var array = ['  *  ', ' * * ', '*****'];
  var str = '';
  var result = [];
  var count = 0;

  while (loopCount !== 0) {

    for (var i = 2; i >= 0; i--) {

      for (var j = 0; j < loopCount; j++) {
        str += array[i]
        if (j !== loopCount - 1) {
          str += ' ';
        }
      }

      if(loopCount !== temp){
        var test = '   ';
        for (var k = 0; k < count; k++) {
          str = test + str;
        }
      }
  
      result.push(str);
      str = '';
    }
    count++;
    loopCount--;
  }


  result.reverse();
  for (var i in result) {
    console.log(result[i]);
  }

}

solution();