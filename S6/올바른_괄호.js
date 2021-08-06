/**
 * 올바른 괄호 쌍 여부 출력
 * (())() 올바른 괄호의 쌍
 * (()())) 올바르지 않은 괄호
 * 스택
 */

function solution(str) {
  let stack = [];

  for (let s of str) {
    if (s === '(') stack.push(s);
    else {
      if (stack.length !== 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}

solution('(()(()))(()');
