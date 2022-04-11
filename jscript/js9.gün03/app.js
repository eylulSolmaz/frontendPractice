const input = document.querySelector("#search");

const search = () => {
  const inputVal = input.value;
  const li = document.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    if (li[i].innerText.toLowerCase().startsWith(inputVal.toLowerCase())) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
input.addEventListener("keyup", search);
