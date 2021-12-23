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

  const buttonDataObj = {
    company: {
      url: urlCompany,
      element: buttonCompany,
    },
    user: {
      url: urlUser,
      element: buttonUser,
    },
    phone: {
      url: urlPhoneNum,
      element: buttonPhoneNum,
    },
  };
  const promise = fetch(buttonDataObj[event.target.id].url);
  render(promise);
  buttonDataObj[event.target.id].element.className = "activ";
});
