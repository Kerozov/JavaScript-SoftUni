function search() {
  const searchText = document.getElementById("searchText").value;
  const regex = new RegExp(searchText);
  const liArr = document.getElementsByTagName("li");
  let sum = 0;

  for (let i = 0; i < liArr.length; i++) {
    if (liArr[i].textContent.match(regex)) {
      liArr[i].style.fontWeight = "bold";
      liArr[i].style.textDecoration = "underline";
      sum++;
    }
  }
  document.getElementById("result").textContent = `${sum} matches found`;
}
