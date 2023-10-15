function lockedProfile() {
   const btns = [...document.querySelectorAll('button')];
   btns.forEach(element => {
    element.addEventListener('click', onClick)
   });

   function onClick(event){
    const parent = event.target.parentElement;
        const isLocked = parent.childNodes[5].checked;
        if (!isLocked) {
            if ( event.target.textContent == 'Show more') {
                parent.childNodes[18].style.display = 'block';
                event.target.textContent = 'Hide it'
            } else {
                parent.childNodes[18].style.display = 'none';
                event.target.textContent = 'Show more'
            }
          
        }
   }
}