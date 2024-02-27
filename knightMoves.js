// This uses the breadth first search

function knightMovesBFS(start, finish) {
  if (start[0] > 7 || start[1] > 7 || start[0] < 0 || start[1] < 0)
    return `invaild starting postion`;
  if (finish[0] > 7 || finish[1] > 7 || finish[0] < 0 || finish[1] < 0)
    return `position not on chessboard`;
  if (start[1] === finish[1] && start[0] === finish[0]) {
    return `your finish destination is the same as your begining`;
  }
  const path = [start];
  const que = [[start, path]];
  const visited = new Set([start]);

  const possibleMoves = [
    [2, 1],
    [1, 2],
    [-2, 1],
    [-1, 2],
    [2, -1],
    [1, -2],
    [-2, -1],
    [-1, -2],
  ];
  while (que.length > 0) {
    const [currentPosition, shortestPath] = que.shift();
    if (currentPosition[0] === finish[0] && currentPosition[1] === finish[1]) {
      let pathTostring = "";
      shortestPath.forEach((index) => {
        pathTostring += `[${index}]`;
      });
      return pathTostring;
    }

    possibleMoves.forEach((move) => {
      const newX = currentPosition[0] + move[0];
      const newY = currentPosition[1] + move[1];
      const newPosition = [newX, newY];
      const newPositionString = `${newX},${newY}`;
      if (
        newX < 8 &&
        newX >= 0 &&
        newY < 8 &&
        newY >= 0 &&
        !visited.has(newPositionString)
      ) {
        visited.add(newPositionString);
        const newPath = [...shortestPath, newPosition];
        que.push([newPosition, newPath]);
      }
    });
  }

  return [];
}
console.log(`test 1 : ${knightMovesBFS([0, 0], [3, 3])}`);
console.log(`test 2 : ${knightMovesBFS([3, 3], [0, 0])}`);
console.log(`test 3 : ${knightMovesBFS([0, 0], [7, 7])}`);
