console.log("_04_addClassButtonEvent.js 読み込み");

// ボタンにmousedownイベントリスナーを設定
_01_elfButton.addEventListener('mousedown', () => {
    currentClassId = "01";
    showCards('01_elf', _01_elfCardNames);
});
_02_royalButton.addEventListener('mousedown', () => {
    currentClassId = "02";
    showCards('02_royal', _02_royalCardNames);
});
_03_witchButton.addEventListener('mousedown', () => {
    currentClassId = "03";
    showCards('03_witch', _03_witchCardNames);
});
_04_dragonButton.addEventListener('mousedown', () => {
    currentClassId = "04";
    showCards('04_dragon', _04_dragonCardNames);
});
_05_nightmareButton.addEventListener('mousedown', () => {
    currentClassId = "05";
    showCards('05_nightmare', _05_nightmareCardNames);
});
_06_bishopButton.addEventListener('mousedown', () => {
    currentClassId = "06";
    showCards('06_bishop', _06_bishopCardNames);
});
_07_nemesisButton.addEventListener('mousedown', () => {
    currentClassId = "07";
    showCards('07_nemesis', _07_nemesisCardNames);
});