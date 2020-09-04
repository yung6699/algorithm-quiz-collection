function solution(food_times, k) {

    var time = 0;
    var i = 0;
    var cnt = 0;

    for (i = 0; i < food_times.length; i += 1) {

        if (food_times[i] !== 0) {

            if (time === k) {
                return i + 1;
            }

            time += 1;
            food_times[i] = food_times[i] - 1;

            if(food_times[i] === 0) {
                cnt += 1;
            }
        }

        if(cnt === food_times.length) {
            return -1;
        }

        if (i + 1 === food_times.length) {
            i = -1;
        }

    }

    return -1;
}
console.log(solution([1, 2], 2));