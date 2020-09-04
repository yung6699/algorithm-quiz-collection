/* 

순환(재귀)적 설계

적어도 하나의 base case, 즉 순환되지 않고 종료되는 case가 있다.  
모든 case는 결국 base로 수렴해야 한다.  

반복문으로 바꿀 수 있다. 반대로 반복문을 재귀로 바꿀 수 있다.

*/

function func(k){
  if(k <= 0){
    return;
  } else {
    console.log("Hello world");
    func(k-1);
  }
}

func(4)

// 1~n 까지 합 구하기
function seqSum(n){
  if(n <= 0){
    return 0;
  } else {
    return n + seqSum(n-1);
  }
}

console.log(seqSum(10));

function factorial(n){
  if(n == 0){
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

console.log(factorial(5));  


// x^n 구할 때
function doublePower(x, n){
   if(n == 0){
     return 1;
   } else {
     return x * doublePower(x, n - 1);
   }
}

console.log(doublePower(2,4));


// 피보나치 수열 값
function fibonacci(n){
  if(n < 2){
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

console.log(fibonacci(10));

// 최대 공약수 알고리즘
function gcd(m, n){
  if(n === 0){
    return m;
  } else {
    return gcd(n, m%n);
  }
}

// 큰 순서 작은 순서 아무거
console.log(gcd(12,24));
console.log(gcd(24,12));