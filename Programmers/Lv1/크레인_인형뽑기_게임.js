const getDoll = (board, index) => {
  let result = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i][index] !== 0) {
      result = board[i][index];
      board[i][index] = 0;
      break;
    }
  }
  return result;
};

function solution(board, moves) {
  let answer = 0,
    dollArr = [];

  for (let i = 0; i < moves.length; i++) {
    let curDoll = getDoll(board, moves[i] - 1);

    if (dollArr[dollArr.length - 1] === curDoll) {
      dollArr.pop();
      answer += 2;
    } else {
      if (curDoll !== 0) dollArr.push(curDoll);
    }
  }

  return answer;
}
