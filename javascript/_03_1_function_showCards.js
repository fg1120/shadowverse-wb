console.log("_03_1_function_showCards.js 読み込み");

let currentClassId = '';

function showCards(className, cardNamesArray) {

    console.log(`3-1 showCards()実行 - クラス番号: ${currentClassId}`);

    const allCardDiv = document.getElementById('allCardDiv');

    // コンテナ内の既存の要素をクリア
    allCardDiv.innerHTML = '';

    // 配列の要素数分だけループ
    cardNamesArray.forEach(cardName => {
        // 新しいカードのHTMLを文字列で作成
        const newCardHTML = `
              <div class="eachCardDiv">
                  <div class="upperDiv">
                      <img class="cardImg" src="pics/${className}/${cardName}.png">
                      <button class="eachCounterResetButton">枚数リセット</button><br>
                  </div>
                  <div class="lowerDiv">
                      <button class="increaseButton">+</button>
                      <input type="number" class="cardCounterInput" value="0" readonly>
                      <button class="decreaseButton">-</button>
                  </div>
              </div>
          `;

        // HTML文字列をDOM要素に変換してコンテナに追加
        allCardDiv.innerHTML += newCardHTML;
    });

    //勝敗管理用の
    opponentClassDiv.innerText = "対 " + classMap[currentClassId];

    getElements(); //3-2
    setCounterResetButtonEvent(); //3-3
    setColorChangeEvents(); //3-4
    setIncDecButtonEvents(); //3-5

}