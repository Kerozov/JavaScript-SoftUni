function extract(content) {
    let text = document.getElementById(content);
    const regex = /\([^()]+\)/g;
    let spliter = text.textContent.match(regex); 
  let words = spliter.map(w=>w.slice(1, w.length - 1));
   return words.join('; ');
}