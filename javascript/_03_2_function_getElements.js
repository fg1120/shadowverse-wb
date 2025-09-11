console.log("_03_2_function_getElements.js 読み込み");

//showCards()でHTMLが生成されたら、
//その中の要素を取得しておく

let eachCounterResetButtons = null;
let increaseButtons = null;
let decreaseButtons = null;
let cardCounterInputs = null;

function getElements() {
    console.log("3-2 getElements() 実行");

    //共通ボタン

    eachCounterResetButtons = document.querySelectorAll('.eachCounterResetButton');
    increaseButtons = document.querySelectorAll('.increaseButton');
    decreaseButtons = document.querySelectorAll('.decreaseButton');

    //枚数カウンター
    cardCounterInputs = document.querySelectorAll('.cardCounterInput');
}