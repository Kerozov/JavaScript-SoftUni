function addItem() {
    let name = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    const option = document.createElement('option');
    option.textContent = name.value;
    option.value = value.value;
    const dropdown = document.getElementById('menu')
    dropdown.appendChild(option);
    name.value = '';
    value.value = '';
}