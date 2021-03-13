function addItem() {
  //create <li>
  const text = document.getElementById("newText").value;
  const liElement = createElement(`li`, text);

  //add delete button
  const dltButton = createElement("a", "[Delete]");
  dltButton.href = "#";
  dltButton.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });

  liElement.appendChild(dltButton);

  const ul = document.getElementById("items");
  ul.appendChild(liElement);
  document.getElementById("newText").value = '';

 
  
  function createElement(type, value) {
    const element = document.createElement(type);
    element.textContent = value;
    return element;
  }
}


