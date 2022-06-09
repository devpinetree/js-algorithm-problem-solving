/**
 * 입력된 문자열에서 소괄호 ( ) 사이에 존재하는
 * 모든 문자를 제거 후 남은 문자만 출력
 * 스택
 */

function solution(str) {
  let stack = [];

  for (let s of str) {
    if (s === ')') while (stack.pop() !== '(');
    else stack.push(s);
  }

  return stack.join('');
}

solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'); // EFLM
