/* 
    안정정렬, 불안정정렬
    merge-sort는 안정정렬이다.
    http://alwayswillbehappy.blogspot.com/2015/08/sort-algorithm.html
*/

function mergeSort (arr) {
    if (arr.length < 2) {
      return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let subLeft = mergeSort(arr.slice(0, mid));
    let subRight = mergeSort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge (node1, node2) {
    const result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
    return result.concat(node1.length? node1 : node2);
}


const array = [ 1233, 5, 7, 3129, 1, 2, 434, 6, 8, 0 ];
console.log(mergeSort(array));