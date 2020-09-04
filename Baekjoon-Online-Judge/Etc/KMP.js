/* 
    KMP 알고리즘은 접두사와 접미사의 개념을 활용하여 '반복되는 연산을 얼마나 줄일 수 있는지' 판별하여
    매칭할 문자열을 빠르게 점프하는 기법
*/

function makeTable(pattern){
    var size = pattern.length;
    var table = [0];
    var j = 0;

    for(var i = 1; i < size; i++){
        while(j > 0 && pattern[i] != pattern[j]){
            j = table[j - 1]
        }

        if(pattern[i] === pattern[j]){
            table[i] = ++j;
        }
    }

    return table;
}


function KMP(parent, pattern){
    var table = makeTable(pattern);
    var parentSize = parent.length;
    var patternSize = pattern.length;
    var j = 0;

    for(var i = 0; i < parentSize; i++){
        while(j > 0 && parent[i] !== pattern[j]){
            j = table[j - 1];
        }

        if(parent[i] === pattern[j]){
            if(j === patternSize - 1){
                console.log("%d 번째에서 찾음", i - patternSize + 2);
                j = table[j];
            } else {
                j++
            }
        }
    }
}

function solution(){
    var parent = "ababacabacaabacaaba";    
    var pattern = "abacaaba";    
    KMP(parent, pattern);
}

solution()