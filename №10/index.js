const div = document.getElementById("div");
const ul = document.getElementById("ul");
const li = document.getElementsByTagName("li");
arr = Array.from(li);

div.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.className = "action";
  }
});
ul.addEventListener("click", function (event) {
  if (event.target.tagName === "LI" && event.ctrlKey) {
    event.target.className = "action";
    event.stopPropagation();
  } else {
    arr.forEach(function (item) {
      item.className = "pas";
    });
  }
});