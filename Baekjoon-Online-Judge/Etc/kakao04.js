// var board = ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']	
var board = ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']

function solution(m, n, board) {
    var answer = 0;
    var boardMap = [];

    boardMap = board.map(v => v.split(''));

    while (1) {
        var result = setting(m, n, boardMap);
        if (result === 0) break;
    }


    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (boardMap[i][j] === null) {
                answer += 1;
            }
        }
    }
    return answer;
}


function setting(m, n, boardMap) {

    var removeMap = [];
    var mark = null;

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var tmp = boardMap[i][j];

            if (tmp !== mark && i + 1 < m && j + 1 < n) {
                if (tmp === boardMap[i + 1][j] && tmp === boardMap[i][j + 1] && tmp === boardMap[i + 1][j + 1]) {
                    removeMap.push([i, j])
                    removeMap.push([i + 1, j])
                    removeMap.push([i, j + 1])
                    removeMap.push([i + 1, j + 1])
                }
            }
        }
    }


    if (removeMap.length === 0) {
        return removeMap.length;
    }

    for (var i = 0; i < removeMap.length; i++) {
        var temp = removeMap[i];
        boardMap[temp[0]][temp[1]] = mark;
    }


    for (var i = 0; i < removeMap.length; i++) {
        var tmp = removeMap[i];
        var x = tmp[0],
            y = tmp[1]
        if (boardMap[x][y] === mark) {

            if (x - 1 >= 0 && boardMap[x - 1][y] !== undefined) {
                boardMap[x][y] = boardMap[x - 1][y]
                boardMap[x - 1][y] = mark

                removeMap.push([x - 1, y])
            }
        }

    }

    return removeMap.length;
}

solution(6, 6, board)
