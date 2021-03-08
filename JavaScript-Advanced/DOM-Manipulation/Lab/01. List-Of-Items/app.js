function addItem() {
    const text = document.getElementById(' ').value;
    const liElement = document.createElement(`li`);
    liElement.textContent = text;
  const ul =  document.getElementById('items');
  ul.appendChild(liElement);
}