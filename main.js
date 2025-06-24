document.querySelectorAll('.emotion-buttons button')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      const emo = btn.dataset.emotion;
      // 예: 클릭한 감정 로깅
      console.log(`${emo} 감정이 쓰레기통에 버려졌어요`);
      // 추후: backend로 전송 → GPT 응답 받아오기
    });
});
