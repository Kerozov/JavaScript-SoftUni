function deleteByEmail() {
    const emails = Array.from(document.querySelectorAll('td'));
    const text = document.querySelector('input').value;
    const isNotFound = true;
    for (let i = 0; i < emails.length; i++) {
        if (emails[i].textContent == text) {
            const row = document.querySelectorAll('td')[i];
            const parent = row.parentNode;
            parent.parentNode.removeChild(parent);
            isNotFound = false;
        }
    }
    if (isNotFound) {
        document.getElementById('result').textContent = 'Not found.'
    }
}