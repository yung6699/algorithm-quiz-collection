//
// 스택을 활용한 진법 변환
// 변환하고 싶은 값(10진수), 변환 진수
//
function baseConverter(decNumber, base) {
    var remStack = [],
        rem,
        binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (remStack.length != 0) {
        var temp = remStack.pop();
        if(temp > 9){
            var value = temp + 55;
            binaryString += String.fromCharCode(value);
        } else{
            binaryString += temp.toString();
        }

    }

    return binaryString;
}

console.log(baseConverter(100, 36));
console.log(baseConverter(100, 8));
console.log(baseConverter(10, 2));
console.log(baseConverter(31, 16));
