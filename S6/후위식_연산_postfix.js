/**
 * 후위연산식이 주어지면 연산한 결과를 출력
 * 만약 3*(5+2)-9 을 후위연산식으로 표현하면
 * 352+*9- 로 표현되며 그 결과는 12입니다.
 * 스택
 */

function solution(str) {
  let result = undefined;
  let stack = [];
  for (let s of str) {
    if (s === '+' || s === '-' || s === '*' || s === '/') {
      if (result === undefined) {
        result = Number(stack.pop());
      }
      switch (s) {
        case '+':
          result = result + Number(stack.pop());
          break;
        case '-':
          result = result - Number(stack.pop());
          break;
        case '*':
          result = result * Number(stack.pop());
          break;
        case '/':
          result = result / Number(stack.pop());
          break;
      }
    } else {
      stack.push(s);
    }
  }
  return result;
}

solution('352+*9-'); // 12
