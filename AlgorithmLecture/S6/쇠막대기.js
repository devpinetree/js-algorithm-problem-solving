/**
 * 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있다.
 * 쇠막대기를 다른 쇠막대기 위에 놓는 경우 완전히 포함되도록 놓되,
 * 끝점은 겹치지 않도록 놓는다.
 * 각 쇠막대기를 자르는 레이저는 적어도 하나 존재한다.
 * 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않는다.
 */

function solution(str) {
  let stack = [],
    stickCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push('(');
    else {
      stack.pop();
      if (str[i - 1] === '(') stickCount += stack.length;
      else stickCount++;
    }
  }
  return stickCount;
}

solution('()(((()())(())()))(())'); // 17
solution('(((()(()()))(())()))(()())'); // 24
