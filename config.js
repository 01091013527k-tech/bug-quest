// ==============================================================
//  도담이와 곤충 탐험대 — 관리자 설정
//  이 파일은 Claude가 관리해요. 부모님은 Claude 채팅으로 말만 하면 돼요.
//  rev 숫자를 올려야 태블릿에 새 설정이 적용돼요.
// ==============================================================
window.ADMIN_CONFIG = {
  rev: 2,

  // 테스트 모드: true면 화면 위에 '처음으로' 버튼이 보여요. 실사용 때 false로 바꿔요.
  testMode: true,

  settings: {
    questCount: 5,                 // 하루 퀘스트 개수 (1~7)
    subjects: {                    // 학습 과목 켜기/끄기
      hangul: true,                //   자음 따라쓰기 (ㄱ~ㅎ)
      vowel: true,                 //   모음 따라쓰기 (ㅏ~ㅣ)
      abc: true,                   //   알파벳 따라쓰기
      num: true,                   //   숫자 따라쓰기
      listen: true,                //   소리 듣고 고르기
      count: true,                 //   곤충 세기
      eng: true,                   //   영어 문장
      draw: true                   //   그림 그리기
    },
    tvMinutes: 10,                 // 하루 완료 시 TV 쿠폰 시간(분), 0이면 안 줌
    stickerGoal: 10,               // 스티커판 칸 수
    giftName: '갖고 싶은 장난감',    // 스티커판 완성 선물
    mapGift: '보물 상자 선물',       // 보물 지도 완성 선물
    mapLen: 30                     // 보물 지도 칸 수 (하루 퀘스트 완료마다 1칸)
  },

  // 홈 화면에서 뿌뿌가 전해주는 부모님 메시지 (빈 칸이면 안 보임)
  message: '',

  // 특별 보상: id가 새로 생기면 태블릿에서 한 번만 지급돼요
  // 예) { id: 'g1', stars: 3, stickers: 1, coupons: 1, couponMinutes: 20, note: '양치 잘했어!' }
  grants: []
};
