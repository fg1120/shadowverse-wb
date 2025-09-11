console.log("_03_3_function_setCounterResetButtonEvent.js 読み込み");

function setCounterResetButtonEvent() {

  console.log("3-3 setCounterResetButtonEvent() 実行");

  //1⃣ 「オールリセット」ボタンにクリックイベントを追加
  allCounterResetButton.addEventListener('mousedown', () => {
    // すべてのカウンター要素をループして値を0に設定
    cardCounterInputs.forEach(counter => {
      counter.value = 0;
    });
  });

  //2⃣ 各リセットボタンにイベントリスナーを追加
  eachCounterResetButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      // クリックされたボタンの最も近い親要素(.eachCardDiv)を取得
      const parentCard = button.closest('.eachCardDiv');

      // 親要素内のカウンター要素を取得
      const cardCounterInput = parentCard.querySelector('.cardCounterInput');

      // カウンターの値を0に設定
      cardCounterInput.value = 0;
    });
  });

}