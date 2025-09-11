console.log("_02_getMenuButtons.js 読み込み");

//クラス別メニューボタン
const elfButton = document.getElementById('_01_elfButton');
const royalButton = document.getElementById('_02_royalButton');
const witchButton = document.getElementById('_03_witchButton');
const dragonButton = document.getElementById('_04_dragonButton');
const nightmareButton = document.getElementById('_05_nightmareButton');
const bishopButton = document.getElementById('_06_bishopButton');
const nemesisButton = document.getElementById('_07_nemesisButton');

//そのほかの要素
const allCounterResetResetButton = document.getElementById('allCounterResetButton');
const opponentClassDiv = document.getElementById('opponentClassDiv');
const mainDiv = document.getElementById('mainDiv');

const classMap = {
    "01": "エルフ",
    "02": "ロイヤル",
    "03": "ウィッチ",
    "04": "ドラゴン",
    "05": "ナイトメア",
    "06": "ビショップ",
    "07": "ネメシス",
};