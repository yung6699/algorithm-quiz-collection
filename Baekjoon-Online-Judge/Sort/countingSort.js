function countingSort(arr){
  var count = [];
  var result = []

  for(var i = 0; i < arr.length; i++){
    count[arr[i]] = 0;
  }

  for(var i = 0; i < arr.length; i++){
    count[arr[i]]++;
  }

  for(var i = 0; i < count.length; i++){
    while(count[i]){
      result.push(i)
      count[i]--
    }
  }

  return result;
}

var array = [1, 23, 45, 2, 8, 134, 9, 0, 4, 2000];
console.log(array);
console.log(countingSort(array));


