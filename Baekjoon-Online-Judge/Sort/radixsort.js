function radixSort(arr) {
  var isSorted = false;
  var position = 1;
  var queue = [];

  for (var i = 0; i < 10; i++) {
    queue.push([]);
  }

  while (!isSorted) {
    isSorted = true;
    var index = 0;

    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      var ditNum = (Math.floor(num / position) % 10);
      queue[ditNum].push(num);

      if (isSorted && ditNum > 0) {
        isSorted = false;
      }
    }
    
    for (var k = 0; k < queue.length; k++) {
      var tmp = queue[k];
      while (tmp.length) {
        arr[index] = tmp.shift();
        index += 1;
      }
    }

    position *= 10;
  }
}

