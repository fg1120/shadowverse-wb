console.log("_05_winLossHistory.js 読み込み");

// DOM要素を取得
const winButton = document.getElementById('winButton');
const lossButton = document.getElementById('lossButton');
const clearAllRecordButton = document.getElementById('clearAllRecordButton');
const toggleButton = document.getElementById('toggleButton');
const winLossSummaryDiv = document.getElementById('winLossSummaryDiv');
const recordListDiv = document.getElementById('recordListDiv');
const sidebarDiv = document.getElementById('sidebarDiv');
const recordCountSelect = document.getElementById('recordCountSelect');
const summarySpan = document.getElementById('summarySpan');

// 勝敗データを扱うための配列
let records = [];
/********************************************************************************/
// localStorageからデータを読み込み、表示する関数
function loadAndDisplay() {
    const savedRecords = localStorage.getItem('records');
    if (savedRecords) {
        records = JSON.parse(savedRecords);
    }

    // 保存された表示件数を取得し、ドロップダウンリストに反映
    const savedCount = localStorage.getItem('maxRecords');
    if (savedCount) {
        recordCountSelect.value = savedCount;
    }

    updateDisplay();
}
/********************************************************************************/
// 勝敗サマリーと履歴リストを更新する関数
function updateDisplay() {
    updatewinLossSummaryDiv();
    updateRecordListDiv();
}
/********************************************************************************/
// 勝敗サマリーを更新する関数
function updatewinLossSummaryDiv() {
    const maxRecords = parseInt(recordCountSelect.value, 10);
    const recentRecords = records.slice(0, maxRecords);
    const wins = recentRecords.filter(r => r.result === 'win').length;
    const losses = recentRecords.filter(r => r.result === 'loss').length;
    const total = recentRecords.length;

    // textContentを更新する要素を winLossSummaryDiv から summarySpan に変更
    summarySpan.textContent = `直近${total}戦: ${wins}勝 ${losses}敗`;
}
/********************************************************************************/
// 履歴リストを更新する関数
function updateRecordListDiv() {
    recordListDiv.innerHTML = '';
    const maxRecordsToShow = parseInt(recordCountSelect.value, 10);
    
    for (let i = 0; i < Math.min(maxRecordsToShow, records.length); i++) {
        const record = records[i];
        const index = i;

        const newEntryContainer = document.createElement('div');
        newEntryContainer.classList.add('time-entry-container');

        const resultText = record.result === 'win' ? '勝ち' : '負け';
        const newTimeEntry = document.createElement('p');

        const displayIndex = (index + 1).toString().padStart(2, '0');

        const date = new Date(record.timestamp);
        const formattedTimestamp = date.toLocaleString('ja-JP', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });

        const oppnetClass = classMap[record.currentClassId] || " 未選択";

        newTimeEntry.textContent = `${displayIndex}. ${resultText} (${formattedTimestamp}) 対${oppnetClass}`;

        if (record.result === 'win') {
            newTimeEntry.classList.add('win-text');
        } else {
            newTimeEntry.classList.add('loss-text');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.classList.add('delete-button');

        deleteButton.addEventListener('click', (event) => {
            const indexToDelete = Array.from(recordListDiv.children).indexOf(event.target.closest('.time-entry-container'));
            if (indexToDelete > -1) {
                records.splice(indexToDelete, 1);
                localStorage.setItem('records', JSON.stringify(records));
                updateDisplay();
            }
        });

        newEntryContainer.appendChild(newTimeEntry);
        newEntryContainer.appendChild(deleteButton);

        recordListDiv.appendChild(newEntryContainer);
    }
}
/********************************************************************************/
// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    loadAndDisplay();
});

// ドロップダウンリストの変更を監視
recordCountSelect.addEventListener('change', (event) => {
    const newMaxRecords = event.target.value;
    localStorage.setItem('maxRecords', newMaxRecords); // 選択された値を保存
    updateDisplay();
});

/********************************************************************************/
// 新しい記録にハイライトを適用する関数を別途定義
function applyHighlight(result) {
    // DOMが更新された後に実行されるようにする
    setTimeout(() => {
        const latestEntry = recordListDiv.firstElementChild;
        if (latestEntry) {
            if (result === 'win') {
                latestEntry.classList.add('highlight-win');
            } else {
                latestEntry.classList.add('highlight-loss');
            }

            // アニメーション終了後にクラスを削除
            latestEntry.addEventListener('animationend', () => {
                latestEntry.classList.remove('highlight-win', 'highlight-loss');
            }, { once: true });
        }
    }, 0);
}

// 勝敗ボタンがクリックされた時の処理
async function recordResult(result) {
    // サイドバーを表示
    if (sidebarDiv.classList.contains('hidden')) {
        sidebarDiv.classList.remove('hidden');
        mainDiv.classList.add('winLossHitory-visible')
        toggleButton.textContent = '>>戦績を隠す';
        await wait(350);
    }

    const now = new Date();
    const timestamp = now.toLocaleString();

    // ここで新しいプロパティを追加
    records.unshift({ result, timestamp, currentClassId });

    //記録を100件までに制限する
    if (records.length > 100) {
        records.pop(); // 配列の末尾（最も古い記録）を削除
    }

    localStorage.setItem('records', JSON.stringify(records));

    updateDisplay();

    //新しい記録が追加された後にハイライトを適用する
    applyHighlight(result);
}

winButton.addEventListener('click', () => recordResult('win'));
lossButton.addEventListener('click', () => recordResult('loss'));

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/********************************************************************************/
// 表示/非表示ボタンの処理
toggleButton.addEventListener('click', () => {
    sidebarDiv.classList.toggle('hidden');

    if (sidebarDiv.classList.contains('hidden')) {
        toggleButton.textContent = '<<戦績を表示する';
        mainDiv.classList.remove('winLossHitory-visible')
    } else {
        toggleButton.textContent = '>>戦績を隠す';
        mainDiv.classList.add('winLossHitory-visible')
    }
});

// 履歴全削除ボタンの処理
clearAllRecordButton.addEventListener('click', () => {
    if (confirm('すべての履歴を削除しますか？')) {
        records = [];
        localStorage.removeItem('records');
        updateDisplay();
    }
});
