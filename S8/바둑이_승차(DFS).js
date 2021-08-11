/**
 * N마리의 바둑이와 각 바둑이의 무게 W가 주어지면,
 * 철수가 C킬로그램를 넘지 않으면서 트럭에 태울 수 있는 가장 무거운 무게
 */

function solution(c, dogs) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = dogs.length;

  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + dogs[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

solution(259, [81, 58, 42, 33, 61]); // 242
