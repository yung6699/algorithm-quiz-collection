//특정 숫자를 입력받으면, 그 수 까지의 소수를 모두 출력하기
//에라토스테네스의 체 (Sieve of Eratosthenes)

function getPrime(num) {
    var array = []
    var i = 2;
    var isPrime = true;

    while (i <= num) {

        isPrime = true;

        for (var n = 2; n < i; n++) {
            // 자기 자신으로 나눠지는건 반복문 조건에 안맞는다.
            // 즉 나눠지는게 없어서 n 값이 i와 같은 값이 될 때까지 반복한다.
            if (i % n == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime == true) {
            array.push(i);
        }

        i++;
    }

    return array;
}

console.log(getPrime(100));
