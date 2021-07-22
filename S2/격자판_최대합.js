/**
 * 5*5 격자판
 * 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력
 */

const solution = (twoDArray) => {
  let result = Number.MIN_SAFE_INTEGER;
  let len = twoDArray.length;
  let rowSum = new Array(len).fill(0),
    columnSum = new Array(len).fill(0),
    diagonalSum = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      rowSum[i] += twoDArray[i][j];
      columnSum[i] += twoDArray[j][i];
    }
  }
  diagonalSum.push(
    twoDArray[0][0] +
      twoDArray[1][1] +
      twoDArray[2][2] +
      twoDArray[3][3] +
      twoDArray[4][4]
  );
  diagonalSum.push(
    twoDArray[0][4] +
      twoDArray[1][3] +
      twoDArray[2][2] +
      twoDArray[3][1] +
      twoDArray[4][0]
  );
  result = Math.max(
    Math.max.apply(null, rowSum),
    Math.max.apply(null, columnSum),
    Math.max.apply(null, diagonalSum)
  );

  return result;
};

solution([
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]); // 155
