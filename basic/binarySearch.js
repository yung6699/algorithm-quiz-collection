//먼저 정렬을 실행해야 한다.
//
function binarySearch(array, item) {
    var low = 0,
        high = array.length - 1,
        mid, element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        element = array[mid];
        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else {
            var str = item + '은 인덱스 ' + mid + '에 있습니다.';
            return str;
        }
    }

    return "찾는 값이 없습니다.";
}

var array = [1, 3, 7, 9, 10, 27];
console.log(binarySearch(array, 3));
console.log(binarySearch(array, 9));
