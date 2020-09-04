function solution(dartResult) {
    var answer = 0;
    var arr = dartResult.split('')

    var numbers = [];
    var index = -1

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i]
        if (!isNaN(str)) {
            index += 1;
            var tmp = arr[i + 1];

            if (!isNaN(tmp)) {
                str += tmp;
                i += 1

            }


            numbers.push(Number(str));
            continue;
        }

        if (str === '*') {
            numbers[index] = numbers[index] * 2;

            if (index - 1 >= 0) {
                numbers[index - 1] = numbers[index - 1] * 2;
            }

        } else if (str === '#') {
            numbers[index] = numbers[index] * -1;
        } else {
            var n = numbers[index]
            numbers[index] = Math.pow(n, test(str));
        }
    }

    console.log(numbers);

    answer = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    });

    console.log(answer);
    return answer;
}


function test(str) {
    switch (str) {
        case 'S':
            return 1;
        case 'D':
            return 2;
        case 'T':
            return 3;
    }
}


var d = '1T2D3D#';

solution(d);