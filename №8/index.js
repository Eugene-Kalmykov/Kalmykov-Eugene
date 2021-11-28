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
