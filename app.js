let form = document.getElementById("form");
let ul = document.getElementById("my-ul");

let savedItems = localStorage.getItem("li");
if (savedItems) {
  // ul.innerHTML=localStorage.clear(savedItems)
  ul.innerHTML = JSON.parse(savedItems);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event);

  let inputValue = event.target[0].value;

  let li = document.createElement("li");
  li.textContent = inputValue;
  li.className = "todo-li";

  ul.appendChild(li);
  

  localStorage.setItem("li", JSON.stringify(ul.innerHTML));

  event.target[0].value = "";
});
