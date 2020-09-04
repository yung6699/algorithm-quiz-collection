// 팩토리열 문제
// 재귀보다 동적으로 푸는게 더 빠르다.



function factorial(num) {
    var str = num + '*';
    if (num == 1) {
        return num;
    } else {
        var res = num;
        for (var i = num - 1; i > 0; i--) {
            if (i == 1) {
                str += i;
            } else {
                res *= i
                str += (i + '*');
            }

        }
        return str + '=' + res;
    }
}


function recursionfactorial(num) {
    if (num < 2)
        return num;
    else
        return num * recursionfactorial(num - 1);
}

function test(N) {
    var result = 1;
    while (N) {
        result *= N;
        N--;
    }
    return result;
}

console.log(factorial(5));
console.log(recursionfactorial(5));
console.log(test(5));