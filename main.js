/*document.querySelectorAll('.emotion-buttons button')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      const emo = btn.dataset.emotion;
      // 예: 클릭한 감정 로깅
      console.log(`${emo} 감정이 쓰레기통에 버려졌어요`);
      // 추후: backend로 전송 → GPT 응답 받아오기
    });
});
*/
const dumpBtn = document.getElementById('dumpBtn');
const emotionField = document.getElementById('emotionField');
const trashList = document.getElementById('trashList');

dumpBtn.addEventListener('click', async () => {
  const text = emotionField.innerText.trim();
  if (!text) {
    alert('감정을 입력해주세요');
    return;
  }

  try {
    await fetch('/trash', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    alert('감정이 쓰레기통에 저장되었습니다.');
    emotionField.value = '';   
  } catch (err) {
    alert('서버 연결 실패');
    console.error(err);
  }
});
