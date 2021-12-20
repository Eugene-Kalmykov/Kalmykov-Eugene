const urlCompany = "https://random-data-api.com/api/company/random_company";
const urlUser = "https://random-data-api.com/api/users/random_user";
const urlPhoneNum =
  "https://random-data-api.com/api/phone_number/random_phone_number";

const header = document.createElement("header");
const div = document.createElement("div");
document.body.prepend(header);
header.after(div);

createButton("company");
createButton("user");
createButton("phone");
const buttonCompany = document.getElementById("company");
const buttonUser = document.getElementById("user");
const buttonPhoneNum = document.getElementById("phone");

const promise = fetch(urlCompany);
render(promise);
buttonCompany.className = "activ";

header.addEventListener("click", function (event) {
  div.innerHTML = "";

  buttonCompany.className = "dis";
  buttonUser.className = "dis";
  buttonPhoneNum.className = "dis";

  if (event.target.id === "company") {
    const promise = fetch(urlCompany);
    render(promise);
    buttonCompany.className = "activ";
  }
  if (event.target.id === "user") {
    const promise = fetch(urlUser);
    render(promise);
    buttonUser.className = "activ";
  }
  if (event.target.id === "phone") {
    const promise = fetch(urlPhoneNum);
    render(promise);
    buttonPhoneNum.className = "activ";
  }
});
