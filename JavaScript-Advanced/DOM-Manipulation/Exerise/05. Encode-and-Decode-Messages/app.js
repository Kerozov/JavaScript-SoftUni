function encodeAndDecodeMessages() {
    let buttons = [...document.querySelectorAll('button')];
    buttons.forEach(e => e.addEventListener('click', onClick) )

    function onClick(event){
    let textArea = [...document.querySelectorAll('textarea')];

        if (event.target.textContent == 'Encode and send it') {
           let text = [...textArea[0].value.split('')];
          text =  text.map(char => { 
                const asciiCode = char.charCodeAt(0);
                const newAsciiCode = asciiCode + 1;
                return String.fromCharCode(newAsciiCode);
            });
            textArea[1].value = text.join('');
            textArea[0].value = '';
        } else {
            let text =   [...textArea[1].value.split('')];
            text =  text.map(char => { 
                const asciiCode = char.charCodeAt(0);
                const newAsciiCode = asciiCode - 1;
                return String.fromCharCode(newAsciiCode);
            });
            textArea[1].value = text.join('');
        }
    }
}