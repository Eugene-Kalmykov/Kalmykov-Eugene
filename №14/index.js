const valueRaw = localStorage.getItem("user");

if (valueRaw) {
  document.body.innerHTML = "";
  let div = document.createElement("div");
  let img = document.createElement("img");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  document.body.prepend(div);
  div.prepend(img);
  img.after(p1);
  p1.after(p2);
  p2.after(p3);
  let url = "https://random-data-api.com/api/users/random_user";
  const promise = fetch(url);
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      img.src = data.avatar;
      p2.innerText = data.first_name;
      p3.innerText = data.last_name;
      p1.innerText = data.username;
    });
  let form = document.createElement("form");
  let input = document.createElement("input");
  document.body.append(form);
  form.append(input);
  input.type = "submit";
  input.value = "delete user ID";
  input.addEventListener("click", () => {
    localStorage.removeItem("user");
  });
} else {
  loginForm.addEventListener("submit", () => {
    let login = document.loginForm.login.value;
    let password = document.loginForm.password.value;
    let user = { login: "", password: "" };
   
    let num = password.split("").find((item) => Number(item));
    let str = password.split("").find((item) => isNaN(item));

    if (login.length < 5) {
      alert("login менее 5 символов");
      return;
    }
    if (password.length < 5) {
      alert("password менее 5 символов");
      return;
    }
    if (Boolean(str) !== true) {
      alert("в password нет букв");
      console.log(str);
      return;
    }
    if (Boolean(num) !== true) {
      alert("в password нет чисел");
      console.log(num);
      return;
    }
    user.login = login;
    user.password = password;
    localStorage.setItem("user", JSON.stringify(user));
  });
}