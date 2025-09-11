console.log("_03_4_function_setIncDecButtonEvents.js 読み込み");

/**
 * ボタンクリックに応じてカウンターの値を変更する
 * @param {HTMLButtonElement} button - クリックされたボタン要素
 * @param {number} delta - 値の増減量（+1 または -1）
 */
function changeCounterNum(button, delta) {
  console.log("changeCounterNum() 実行 " + delta )

  // クリックされたボタンの親要素を取得
  const parentDiv = button.closest('.lowerDiv');

  // 親要素内のテキストボックスを取得
  const numberInput = parentDiv.querySelector('.cardCounterInput');

  // 現在の値を取得し、整数に変換
  let currentValue = parseInt(numberInput.value, 10);

  // 新しい値を計算
  let newValue = currentValue + delta;

  // 値がマイナスにならないようにする条件を追加
  if (newValue >= 0) {
    numberInput.value = newValue;
  }
}

/*****************************************************************/

function setIncDecButtonEvents() {
  console.log("3-5 setIncDecButtonEvents() 実行");

  // 各ボタンにイベントリスナーを追加
  increaseButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      changeCounterNum(button, 1); // 増やす場合は +1 を渡す
    });
  });

  decreaseButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      changeCounterNum(button, -1); // 減らす場合は -1 を渡す
    });
  });

}
