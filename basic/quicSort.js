/* 
    안정정렬, 불안정정렬
    quick-sort는 안정정렬이다.
    http://alwayswillbehappy.blogspot.com/2015/08/sort-algorithm.html
*/

function quickSort(array, l, r) {

  let pivot = array[Math.floor((l + r) / 2)];
  let left = l;
  let right = r;

  while (left <= right) {

    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;

    if (left <= right) {
      swap(array, left, right )
      left++;
      right--;
    }
  }

  if (l < right) quickSort(array, l, right);
  if (r > left) quickSort(array, left, r);

  return array;
}

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


const array = [ 1233, 5, 7, 3129, 1, 2, 434, 6, 8, 0 ];
console.log(quickSort(array, 0, array.length - 1));