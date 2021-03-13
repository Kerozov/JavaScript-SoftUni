function solve() {
  const addButtons = document.querySelectorAll(".add-product");
  let fullPrice = 0;
  const cart = [];
  for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", onClick);
  }
  function onClick(ev) {
    const price = ev.target.parentNode.parentNode.lastElementChild.textContent;
    fullPrice += Number(price);
    const name =
      ev.target.parentNode.parentNode.childNodes[3].childNodes[1].textContent;
    cart.push({ name, price });
  }
  document.querySelector(".checkout").addEventListener("click", checkout);
  function checkout(ev) {
    const res = cart.map((c) => `Added ${c.name} for ${c.price} to the cart.`);
    const unique = [...new Set(cart.map(item => item.name))];
    res.push(`You bought ${unique.join(', ')} for ${fullPrice.toFixed(2)}.`);
    document.querySelector("textarea").textContent = res.join("\n");
    for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].disabled = true;
    }
  }
}
