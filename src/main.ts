window.onload = () => {
    document.getElementById('csvText')?.addEventListener('input', () => {
        formating();
        copyDivToClipboard();
    });
    document.querySelector('#copyBtn')?.addEventListener('click', () => {
        copyDivToClipboard();
    });
};

function formating() {
    const textArea = <HTMLTextAreaElement>document.querySelector('#csvText');
    const outdiv = <HTMLElement>document.querySelector('#output');
    outdiv.innerHTML = '';

    const text = textArea.value;
    const lines: string[] = text.split("\n");

    lines.slice(0, 5).forEach(line => {
        let tokens = line.split('\t');
        let label = tokens[0];
        let value = tokens[1];
        console.log(`${label} ${value}`);
        outdiv.innerHTML += `${label} ${value}<br />`;
    });
    
    let outputStr0 = 'と→み<br />';
    let outputStr1 = 'み→と<br />';
    lines.slice(6, lines.length - 1).forEach(line => {
        let tokens = line.split('\t');
        let use = formatString(tokens[0], '　');
        let date = tokens[1].slice(5);
        let price = tokens[2];
        let who = tokens[3];
        if (who == 'と→み') {
            outputStr0 += `${use}　${date}　${price}<br />`;
        } else if (who == 'み→と') {
            outputStr1 += `${use}　${date}　${price}<br />`;
        }
    });
    outdiv.innerHTML += outputStr0;
    outdiv.innerHTML += '<br>';
    outdiv.innerHTML += outputStr1;
}

function formatString(input: string, fullWidthSpace: string): string {
    const len = 5;
    if (input.length <= len) {
        return input.padEnd(len, fullWidthSpace); // 10文字になるよう全角スペースで埋める
    } else {
        return input.slice(0, len - 1) + '...'; // 10文字以上の場合は9文字で区切る
    }
}

function copyDivToClipboard(): void {
    const outdiv = <HTMLElement>document.querySelector('#output');
    if (outdiv) {
        const range = document.createRange();
        range.selectNode(outdiv);
        const selection = window.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);

            try {
                document.execCommand('copy');
                console.log('クリップボードにコピーしました');
            } catch (err) {
                console.error('コピーに失敗しました', err);
            }

            selection.removeAllRanges(); // 選択を解除
        }
    }
}
