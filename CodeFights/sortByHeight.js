function sortByHeight(arr) {
    let temp = arr.reduce((acc, v) => { 
        if(v !== -1) acc.push(v) 
        return acc
    }, [])

    temp.sort((a, b) => a - b);

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== -1)     
            arr[i] = temp.shift();
    }

    return arr;
}