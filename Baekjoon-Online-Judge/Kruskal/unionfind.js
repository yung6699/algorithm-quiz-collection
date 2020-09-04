/* 
  합집합 찾기
  크루스칼 알고리즘 풀 때 사용한다.
  여러 개의 노드가 존재할 때 두 개의 노드를 선택해서 현재 두 노드가
  서로 같은 그래프에 속하는지 판별하는 알고리즘 
*/

var parent = [];

function getParent(x){
  if(parent[x] == x) return x;
  return parent[x] = getParent(parent[x]);
}

function unionParent(a, b){
  a = getParent(a);
  b = getParent(b);
  if(a < b) parent[b] = a;
  else parent[a] = b;
}

function findParent(a, b){
  a = getParent(a);
  b = getParent(b);
  if(a == b) return true;
  else return false;
}

for(var i = 1; i <= 8; i++){
  parent[i] = i;
}

unionParent(1,2)
unionParent(2,3)
unionParent(3,4)
unionParent(5,6)
unionParent(6,7)
unionParent(7,8)
console.log(findParent(1,5));
unionParent(1,5)
console.log(findParent(1,5));

console.log(parent);