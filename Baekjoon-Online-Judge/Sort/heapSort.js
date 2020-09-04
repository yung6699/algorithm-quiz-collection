/* 
    힙 정렬, 병합 정렬, 퀵 정렬 만큼 빠른 정렬 알고리즘이다.
    고급 프로그래밍 기법으로 갈 수록 힙을 자주 사용한다. 힙 정렬은 힙트리 구조를 이용한 정렬이다.
    힙은 최솟값이나 최댓값을 빠르게 찾아내기 위해 완전 이진트리를 기반으로 하는 트리이다.
 */


// var heap = [7, 6, 5, 8, 3, 5, 9, 1, 6];
// var heap = [10, 26, 5, 37, 1, 61, 11, 59, 15, 48, 19];
const heap = [1, 23, 45, 2, 8, 134, 9, 4, 2000];

var num = heap.length;

function heapSort() {

    // 힙을 구성
    for (var i = 1; i < num; i++) {
        var c = i;
        while (c != 0) {
            var root = Math.floor((c - 1) / 2);
            if (heap[root] < heap[c]) {
                var temp = heap[root];
                heap[root] = heap[c];
                heap[c] = temp;
            }

            c = root;
        }
    }

    for (var i = num - 1; i >= 0; i--) {
        var temp = heap[0];
        heap[0] = heap[i];
        heap[i] = temp;
        var root = 0;
        var c = 1;

        while (c < i) {
            c = 2 * root + 1;
            if (c < i - 1 && heap[c] < heap[c + 1]) {
                c += 1;
            }

            if (c < i && heap[root] < heap[c]) {
                temp = heap[root];
                heap[root] = heap[c];
                heap[c] = temp;
            }
            root = c;
        }
    }
}

heapSort();
console.log(heap);