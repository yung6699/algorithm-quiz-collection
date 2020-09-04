/* 
    카카오 문제 1번
*/

function solution(record) {

    var user = {};
    var result = [];
    var answer = [];

    for(var i = 0; i < record.length; i++){

        const arr = record[i].split(' ');
        const str = arr[0];
        const id = arr[1];

        if (str === 'Enter') {
            user[id] = arr[2];
            result.push(['님이 들어왔습니다.', id])
        } else if (str === 'Leave') {
            result.push(['님이 나갔습니다.', id])
        } else if (str === 'Change') {
            user[id] = arr[2];
        }
    }

    for(var i = 0 ; i < result.length; i++){
       var tmp = result[i];
       var id = tmp[1];     
       var str = user[id] + tmp[0];
       answer.push(str)
    }    
    return answer;
}

solution(['Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan'
])


// [Prodo님이 들어왔습니다., 
//  Ryan님이 들어왔습니다.,
//  Prodo님이 나갔습니다., 
//  Prodo님이 들어왔습니다.]