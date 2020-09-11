/*
    DFS|BFS, DFS 문제 => 큐, 스택으로 푸는 문제임
    https://app.codesignal.com/interview-practice/task/HdgqPhHqs3NciAHqH/solutions
*/

function countClouds(skyMap) {
    let cnt = 0
    for(let i = 0; i < skyMap.length; i++){
        for(let j = 0; j < skyMap[i].length; j++){
            if(skyMap[i][j] === '1'){
                bfs(skyMap, i, j);
                cnt++;
            }
        }
    }

    return cnt;
}


function bfs(skyMap, tx, ty){
    const queue = [[tx, ty]];
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    while(queue.length){
        let tmp = queue.shift();
        let x = tmp[0];
        let y = tmp[1];

        skyMap[x][y] = 'x';

        for(let i = 0; i < 4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx >= 0 && nx < skyMap.length && ny >= 0 && ny < skyMap[0].length && skyMap[nx][ny] === '1'){
                queue.unshift([nx, ny]);
            }
        }

    }
}

let s = [['0', '1', '1', '0', '1'],
          ['0', '1', '1', '1', '1'],
          ['0', '0', '0', '0', '1'],
          ['1', '0', '0', '1', '1']]


console.log(countClouds(s));
