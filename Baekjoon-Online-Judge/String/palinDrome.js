/* 
  회문탐색 알고리즘
  회문이란 앞으로 읽든 뒤로 읽든 똑같은 문자열
*/

function isPalinDrome(str){
  var length  = str.length;
  for(var i = 0; i < length; i++){
    if(str[i] !== str[length - (i+1)]){
      return false;
    }
  }
  return true;
}

var data = ["토마토","level","a","Fail"];

for(var i = 0; i < data.length; i++){
  console.log(data[i], isPalinDrome(data[i]));  
}