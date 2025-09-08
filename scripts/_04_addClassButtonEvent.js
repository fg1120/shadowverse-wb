console.log("_04_addClassButtonEvent.js 読み込み");

// ボタンにmousedownイベントリスナーを設定
_01_elfButton.addEventListener('mousedown', () => {
    showCards('01_elf', _01_elfCardNames);
});
_02_royalButton.addEventListener('mousedown', () => {
    showCards('02_royal', _02_royalCardNames);
});
_03_witchButton.addEventListener('mousedown', () => {
    showCards('03_witch', _03_witchCardNames);
});
_04_dragonButton.addEventListener('mousedown', () => {
    showCards('04_dragon', _04_dragonCardNames);
});
_05_nightmareButton.addEventListener('mousedown', () => {
    showCards('05_nightmare', _05_nightmareCardNames);
});
_06_bishopButton.addEventListener('mousedown', () => {
    showCards('06_bishop', _06_bishopCardNames);
});
_07_nemesisButton.addEventListener('mousedown', () => {
    showCards('07_nemesis', _07_nemesisCardNames);
});