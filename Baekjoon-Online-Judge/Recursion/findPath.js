const N = 8;
const PATHWAY_COLOUR = 0;
const WALL_COLOUR = 1;
const BLOCKED_COLOUR = 2;
const PATH_COLOUR = 3;

const maze = [
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 1, 1, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 0, 0]
]

function findPath(x, y) {

  if(x < 0 || y < 0 || x >= N || y >= N || maze[x][y] != PATHWAY_COLOUR){
    return false;
  } else if ( x == N-1 && y == N-1){
    maze[x][y] = PATH_COLOUR;
    return true;
  } else {
    maze[x][y] = PATH_COLOUR;
    if(findPath(x-1, y) || findPath(x, y+1) || findPath(x+1, y) || findPath(x, y-1)){
      return true;
    }
    maze[x][y] = BLOCKED_COLOUR;
    return false;
  } 
}

console.log(maze);
findPath(0,0);
console.log(maze);