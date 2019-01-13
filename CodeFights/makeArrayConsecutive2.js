/* 
  https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC/solutions
*/

function makeArrayConsecutive2(statues) {
    statues.sort((a,b) => a - b);
    const arr = [];
    let start = statues[0];
    let end = statues[statues.length - 1];
    
    for(let i = end; i >= start; i--){
        arr.push(i);
    }
    
    return arr.length - statues.length;
    
    
}
