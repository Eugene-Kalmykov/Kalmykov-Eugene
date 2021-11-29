let footer = document.createElement("footer");
footer.className = "foo";
let nav = document.createElement("nav");
nav.className = "menu";
let ul = document.createElement("ul");
ul.className = "list";

document.body.append(footer);
footer.prepend(nav);
nav.prepend(ul);

const footerArray = [
  { name: "google", href: "https://www.google.com" },
  { name: "yandex", href: "https://yandex.com" },
  { name: "duckduckgo", href: "https://duckduckgo.com" },
  { name: "bing", href: "https://bing.com" },
  { name: "yahoo!", href: "https://yahoo.com" },
];
let id = 0;
footerArray.forEach((item) => {
  ++id;
  let li = document.createElement("li");
  ul.append(li);
  li.className = "li";
  li.innerHTML = `<a id="${"а" + id}" href="${item.href}">"${item.name}"</a>`;
});
