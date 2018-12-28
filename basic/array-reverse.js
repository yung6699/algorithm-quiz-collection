/**
 *  배열에 있는 값을 뒤집는 방법
 *  스택 등 여러 방법이 있지만 양 끝을 swap 하면 n/2로 해결 가능하다.
 */

function arrReverse(arr) {
    let arrCount = arr.length;
    let pivot = Math.floor(arrCount / 2);
    for (let i = 0; i < pivot ; i++) {
        let temp = arr[i];
        arr[i] = arr[arrCount - i - 1];
        arr[arrCount - i - 1] = temp
    }
    return arr;
}

console.log(arrReverse([1, 2, 3, 5, 6])); // [ 6, 5, 3, 2, 1 ]
console.log(arrReverse(["test","daa","werwr","qweqer"])); // [ 'qweqer', 'werwr', 'daa', 'test' ]