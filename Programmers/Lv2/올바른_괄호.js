function solution(s) {
  let isPair = false;

  for (let bracket of s) {
    console.log(bracket);
    console.log(bracket === '(');

    console.log(isPair | (bracket === '('));
  }
  // let bracketArr = [...s];
  // let stack = [];
  // let isPair = false;
  // for (let i = 0; i < bracketArr.length; i++) {
  //   console.log(bracketArr[i]);
  //   if (stack.length === 0) {
  //     stack.push(bracketArr[i]);
  //   } else {
  //     if (bracketArr[i] === '(') {
  //       stack.push(bracketArr[i]);
  //     } else {
  //       stack.pop();
  //     }
  //   }
  // }
  // return stack.length === 0;
}

solution('()()');
