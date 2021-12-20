const render = (promise) => {
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let arrayKeysData = Object.keys(data);
      arrayKeysData.forEach((key) => {
        let p = document.createElement("p");
        if (typeof data[key] === "object") {
          let ul = document.createElement("ul");
          ul.innerText = `${key}:`;
          let arrayKeysObj = Object.keys(data[key]);
          arrayKeysObj.forEach((value) => {
            let li = document.createElement("li");
            li.innerText = data[key][value];
            ul.append(li);
          });
          div.append(ul);
          return;
        }
        p.innerText = `${key}: ${data[key]}`;
        div.append(p);
      });
    });
};
const createButton = (value) => {
  let button = document.createElement("button");
  button.className = "dis";
  button.innerText = `${value}`;
  button.id = `${value}`;
  header.append(button);
};
