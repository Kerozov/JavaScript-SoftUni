
clicks = 0;
function create(words) {
   for (const element of words) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = element;
      p.style.display = "none";
      div.addEventListener("click", onClick);
      div.appendChild(p);
      let output = document.getElementById('content');
      output.appendChild(div);
   }
   function onClick(event){
   if (clicks % 2 == 0) {
      event.target.childNodes[0].style.display = '';
      
   }
   else{
      event.target.childNodes[0].style.display = 'none';
   }
   clicks++
}
}

