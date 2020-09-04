function quickSort(array, l, r){
    let pivot = array[Math.floor((l+r)/2)],
        left = l, right = r;
  
    if(array.length > 1){
      while(left <= right) {
          
        while(array[left] < pivot ) left++;
        while(array[right] > pivot ) right--;
    
        if(left <= right ){
          let temp = array[left];
          array[left] = array[right];
          array[right] = temp;
          left++; 
          right--;
        }
      }
      
      if(l < right) quickSort(array, l, right);
      if(r > left) quickSort(array, left, r);
    }
  
    return array;
  }
  
  const array = [1, 23, 45, 2, 8, 134, 9, 4, 2000];
  console.log(quickSort(array, 0, array.length - 1));  