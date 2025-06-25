document.querySelectorAll('.emotion-buttons button')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      const emo = btn.dataset.emotion;
      // 예: 클릭한 감정 로깅
      console.log(`${emo} 감정이 쓰레기통에 버려졌어요`);
      // 추후: backend로 전송 → GPT 응답 받아오기
    });
});

const dumpBtn = document.getElementById('dumpBtn');
const emotionInput = document.getElementById('emotionField');
const trashList = document.getElementById('trashList');

dumpBtn.addEventListener('click', () => {
  const text = emotionField.innerTxt.trim();
  if (!text) {
    alert('감정을 입력해주세요');
    emotionField.focus();
    return;
  }
  const entry = document.createElement('div');
  entry.textContent = `🗑️ ${text}`;
  trashList.appendChild(entry);
  
  emotionField.innerText = '';
  emotionField.focus();
});
