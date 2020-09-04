// 문자열의 길이를 계산하는 재귀적 사고
function strLen(str) {
  if (str === "") {
    return 0;
  } else {
    return 1 + strLen(str.substring(1));
  }
}

console.log(strLen("ace wow"));

// 문자열 프린트
function printChars(str) {
  if (str.length === 0) {
    return;
  } else {
    process.stdout.write(str.charAt(0));
    printChars(str.substring(1))
  }
}

printChars("ace wow");

process.stdout.write('\n');

// 문자열 역순 프린트
function printCharsReverse(str) {
  if (str.length === 0) {
    return;
  } else {
    printCharsReverse(str.substring(1))
    process.stdout.write(str.charAt(0));
  }
}

printCharsReverse("ace wow");

process.stdout.write('\n');

function printInBinary(n) {
  if (n < 2) {
    console.log(n);
  } else {
    printInBinary(Math.floor(n / 2));
    console.log(n % 2);
  }
}

printInBinary(7);

function search(array, begin, end, target) {
  if (begin > end) {
    return -1;
  } else if (target === array[begin]) {
    return begin;
  } else {
    return search(array, begin + 1, end, target)
  }
}

var array = [2, 3, 1, 5, 7, 8];
console.log(search(array, 0, 5, 7));

function searchMiddle(array, begin, end, target) {
  if (begin > end) {
    return -1;
  } else {
    var middle = Math.floor((begin + end) / 2);
    if (array[middle] === target) {
      return middle;
    }
    var index = search(array, begin, middle - 1, target);
    if (index !== -1) {
      return index;
    } else {
      return search(array, middle + 1, end, target)
    }
  }
}


console.log(searchMiddle(array, 0, 5, 7));

// 최대 값 찾기 재귀함수
function findMax(array, begin, end) {
  if (begin === end) {
    return array[begin];
  } else {
    return Math.max(array[begin], findMax(array, begin + 1, end));
  }
}

console.log(findMax(array, 0, array.length - 1));

function findMaxMiddle(array, begin, end) {
  if (begin === end) {
    return array[begin];
  } else {
    var middle = Math.floor((begin + end) / 2);
    var max1 = findMaxMiddle(array, begin, middle);
    var max2 = findMaxMiddle(array, middle + 1, end);
    return Math.max(max1, max2);
  }
}

console.log(findMaxMiddle(array, 0, array.length - 1));


/* 암시적 매개변수를 명시적으로 표현하라 begin, end 처럼 */