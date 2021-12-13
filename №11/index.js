const formArray = [
  { type: "text", name: "text" },
  { type: "password", name: "passwords" },
];
const funcForm = (array) => {
  const form = document.createElement("form");
  form.name = "form";

  array.forEach((item) => {
    let input = document.createElement("input");
    let br = document.createElement("br");
    input.type = item.type;
    input.name = item.name;
    form.append(input);
    input.after(br);
  });
  return form;
};
const formHtml = funcForm(formArray);
document.body.prepend(formHtml);