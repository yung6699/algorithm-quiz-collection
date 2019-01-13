function isLucky(n) {
    let first = 0;
    let second = 0;
    let arr = String(n).split('');
    let hIndex = Math.floor(arr.length/2) -1;

    for(let i = 0; i <= hIndex; i++){
        first += Number(arr[i]);
        second += Number(arr[arr.length -i -1])
    }
    
    return (first === second)? true : false;
}

console.log(isLucky(10));