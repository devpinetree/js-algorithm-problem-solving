/**
 *
 * @param {*} id_list - 이용자의 ID가 담긴 문자열 배열
 * @param {*} report - 각 이용자가 신고한 이용자 ID가 담긴 문자열 배열
 * @param {*} k - 정지 기준 신고 횟수
 * @returns - 각 유저별로 처리 결과 메일을 받은 횟수 배열
 */

function solution(id_list, report, k) {
  let result = [];
  let reportedUserId = [];
  let stoppedUserId = [];

  // 신고 당한 userId
  for (let i = 0; i < report.length; i++) {
    const [userId, reportedId] = report[i].split(' ');
    reportedUserId.push(reportedId);
  }

  // 정지 당한 userId
  for (let i = 0; i < id_list.length; i++) {
    let count = 0;

    for (let j = 0; j < reportedUserId.length; j++) {
      if (id_list[i] === reportedUserId[j]) {
        count++;
      }
    }

    if (count >= k) {
      stoppedUserId.push(id_list[i]);
    }
  }

  //   for (let i = 0; i < report.length; i++) {
  //     const [userId, reportedId] = report[i].split(' ');

  //     let count = 0;
  //     for (let j = 0; j < stoppedUserId.length; j++) {
  //       if (reportedId === stoppedUserId[j]) {
  //         count++;
  //       }
  //     }
  //     console.log(userId, count);
  //   }

  // 각 유저가 신고한 유저 배열 object array

  // 신고당한 유저와 각 신고 횟수 배열

  // 신고당한 유저의 신고 횟수가 k 이상이면 정지된 유저 배열에 저장

  // 정지된 유저 배열과 각 유저가 신고한 유저 배열 중 같은 ID가 몇 개인지 결과 배열에 저장
  return;
}

solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2
); // [2,1,1,0]
// solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3); // [0,0]
