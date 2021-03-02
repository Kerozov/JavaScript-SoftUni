function extractText() {
    let itemsStr = [...document.querySelectorAll('li')].map(e => e.textContent);
    const textArea = document.getElementById('result');
    textArea.value = itemsStr.join('\n');
}