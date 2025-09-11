console.log("_03_5_function_changeColor.js 読み込み");

/**********************************************************************/
// カウンターの色を変更する共通関数
function highlightCounter(button, color) {

  console.log("highlightCounter() 実行");

  const parentCard = button.closest('.eachCardDiv');
  const cardCounterInput = parentCard.querySelector('.cardCounterInput');

  // 背景色を変更
  cardCounterInput.style.backgroundColor = color;

  // 30ミリ秒後に元の色に戻す
  setTimeout(() => {
    // スタイルをリセット
    cardCounterInput.style.backgroundColor = '';
  }, 30);
}
/**********************************************************************/

//全リセットボタンで発動させる関数
function setAllCounterResetButtonEvent() {

  // すべてのeachCounterResetButtonをループ
  eachCounterResetButtons.forEach(button => {
    // 新しいマウスイベントを作成
    const mousedownEvent = new MouseEvent('mousedown');

    // イベントを各ボタンで発火させる
    button.dispatchEvent(mousedownEvent);
  });
}

/**********************************************************************/

function setColorChangeEvents() {
  console.log("3-4 setColorChangeEvents() 実行");

  // イベントリスナーを設定

  //allCounterResetButton→すべてのeachCounterResetButtonを発動
  allCounterResetButton.addEventListener('mousedown', setAllCounterResetButtonEvent);

  //個別リセットボタン
  eachCounterResetButtons.forEach(button => {
    button.addEventListener('mousedown',()=>{
      highlightCounter(button, '#64f38c')// 緑色
    })
  });

  //＋ボタン
  increaseButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      highlightCounter(button, '#f56d6d'); // 赤色
    });
  });

  //－ボタン
  decreaseButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      highlightCounter(button, '#719ff8'); // 青色
    });
  });

}
/**********************************************************************/