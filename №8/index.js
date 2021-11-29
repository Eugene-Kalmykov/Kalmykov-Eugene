let footer = document.createElement("footer");
footer.className = "foo";
let footerNav = document.createElement("nav");
footerNav.className = "menu";
let footerUl = document.createElement("ul");
footerUl.className = "list";

document.body.append(footer);
footer.prepend(footerNav);
footerNav.prepend(footerUl);

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
  footerUl.append(li);
  li.className = "li";
  li.innerHTML = `<a id="${"а" + id}" href="${item.href}">"${item.name}"</a>`;
});

const array = [
  { name: "Vk.com", href: "https://vk.com/", class: "w1" },
  { name: "Instagram", href: "https://www.instagram.com", class: "w2" },
  { name: "YouTube", href: "https://www.youtube.com", class: "w3" },
  { name: "Facebook", href: "https://www.facebook.com/", class: "w4" },
];

const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

header.prepend(nav);
nav.prepend(ul);

ul.className = "ul";

array.forEach(function (item) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.innerHTML = item.name;
  a.href = item.href;
  a.target = "_blank";
  a.className = item.class;
  li.append(a);
  ul.append(li);
});

document.body.prepend(header);
console.log(header);