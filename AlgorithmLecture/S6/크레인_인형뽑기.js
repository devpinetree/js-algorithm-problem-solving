/**
 * 게임 화면의 격자의 상태가 담긴 2차원 배열 board와
 * 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때,
 * 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return
 */
function pickDoll(board, moveIndex) {
  let doll = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i][moveIndex] !== 0) {
      doll = board[i][moveIndex];
      board[i][moveIndex] = 0;
      break;
    }
  }
  return doll;
}

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  let curDoll;
  for (let move of moves) {
    curDoll = pickDoll(board, move - 1);
    if (stack[stack.length - 1] === curDoll) {
      stack.pop();
      answer += 2;
    } else stack.push(curDoll);
  }

  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
); // 4
