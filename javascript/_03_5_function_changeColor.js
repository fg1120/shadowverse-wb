console.log("_03_5_function_changeColor.js.js 読み込み");


// カウンターの色を変更する共通関数
function highlightCounter(button, color) {

  console.log("highlightCounter() 実行");

  const parentCard = button.closest('.eachCardDiv');
  const cardCounter = parentCard.querySelector('.cardCounter');

  // 背景色を変更
  cardCounter.style.backgroundColor = color;

  // 300ミリ秒後に元の色に戻す
  setTimeout(() => {
    // スタイルをリセット
    cardCounter.style.backgroundColor = '';
  }, 30);
}
/**********************************************************************/

function setColorChangeEvents() {
  console.log("3-4 setColorChangeEvents() 実行");

  // イベントリスナーを設定

  //allResetButton→すべてのeachResetButtonを発動
  allResetButton.addEventListener('mousedown', () => {
    // すべてのeachResetButtonをループ
    eachResetButtons.forEach(button => {
      // 新しいマウスイベントを作成
      const mousedownEvent = new MouseEvent('mousedown');

      // イベントを各ボタンで発火させる
      button.dispatchEvent(mousedownEvent);
    });
  });

  eachResetButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      highlightCounter(button, '#64f38c'); // 緑色
    });
  });

  increaseButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      highlightCounter(button, '#f56d6d'); // 赤色
    });
  });

  decreaseButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      highlightCounter(button, '#719ff8'); // 青色
    });
  });

}
/**********************************************************************/