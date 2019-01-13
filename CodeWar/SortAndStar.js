/* 
    https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
*/

function twoSort(s) {
    s.sort(compare);
    return s[0].split('').join('***')
}

function compare(a ,b){
    return (a > b) ? 1 : (a < b) ? -1 : 0
}