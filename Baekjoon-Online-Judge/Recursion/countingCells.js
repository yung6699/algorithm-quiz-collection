const BACKGROUND_COLOR = 0;
const IMAGE_COLOR = 1;
const ALREADY_COUNTED = 2;
const N = 8;

const grid = [
  [1, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0, 1, 0, 0],
  [1, 1, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1],
  [0, 1, 1, 0, 0, 1, 1, 1]
]
function countCells(x, y){
  var result;
  //배열의 범위인지 확인
  if(x<0 || x>=N || y<0 || y>=N){
    return 0;
  }
  //이미지 픽셀인지 확인
  else if(grid[x][y] != IMAGE_COLOR){
    return 0;
  }
  //해당 픽셀을 ALREADY_COUNTED로 변경후 1을 리턴 하면서 인근 픽셀들에 대해 재귀적으로 조사한다.
  else{
    grid[x][y] = ALREADY_COUNTED;
    return 1 + countCells(x-1, y+1) + countCells(x, y+1) +
    countCells(x+1, y+1) + countCells(x-1, y) +
    countCells(x+1, y) + countCells(x-1, y-1) +
    countCells(x, y-1) + countCells(x+1, y-1);
  }
}


console.log(countCells(3, 5)); 
