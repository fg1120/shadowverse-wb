console.log("_03_3_functon_setResetButtonEvent.js 読み込み");

function setResetButtonEvent() {

  console.log("3-3 setResetButtonEvent() 実行");

  //1⃣ 「オールリセット」ボタンにクリックイベントを追加
  allResetButton.addEventListener('mousedown', () => {
    // すべてのカウンター要素をループして値を0に設定
    cardCounters.forEach(counter => {
      counter.value = 0;
    });
  });

  //2⃣ 各リセットボタンにイベントリスナーを追加
  eachResetButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      // クリックされたボタンの最も近い親要素(.eachCardDiv)を取得
      const parentCard = button.closest('.eachCardDiv');

      // 親要素内のカウンター要素を取得
      const cardCounter = parentCard.querySelector('.cardCounter');

      // カウンターの値を0に設定
      cardCounter.value = 0;
    });
  });

}