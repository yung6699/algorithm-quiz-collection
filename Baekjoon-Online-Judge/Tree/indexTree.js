/* 
    인덱스 트리는 이진 인덱스 구조를 활용하여 '구간합' 문제를 효과적으로 해결 할 수 있는 자료구조이다.
    펜윅 트리라고 불리는 인덱스 트리는 세그먼트 트리와 비슷한 성능을 가지지만 구현이 간단하다.
    특히 비트 연산을 활용하여 보다 직관적인 구조를 가지고 있다.
    세그먼트 트리는 연산을 위해 기본적으로 전체 개수의 2배 이상으로 메모리 공간을 준비해야한다.
    인덱스 트리는 추가적인 메모리가 필요하지 않다는 점에서 세그먼트 트리보다 더 개선된 메모리 성능을 보인다.
*/


var arr =  [1,2,3,4,5];
var tree = [];
var N = arr.length;

for(var i = 0; i <= N; i++){
    tree[i] = 0;
}

// 1에서 부터 특정 값까지의 합
function sum(v) {
    var result = 0;
    while (v > 0) {
        result += tree[v];
        v -= (v & -v);
    }

    return result;
}

function update(v, dis, bool) {
    
    if(bool){ // 값을 바꾸는 경우 true, 처음 트리를 만드는 경우 false
        dis = dis  - tree[v];
    }

    while (v <= N) {
        tree[v] += dis;
        v += (v & -v);
    }
}

function getSection(start, end) {
    return sum(end) - sum(start - 1);
}

for(var i = 0; i < N; i++){
    update(i+1, arr[i], false)
}
console.log(tree);
console.log(getSection(2, 5));

update(3, -2, true)
console.log(tree);
console.log(getSection(2, 5));
