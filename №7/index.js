String.prototype.getVowels = function (letter) {
  let stringValue = this;
  let counter = 0;

  let letters =
    typeof letter === "string"
      ? [letter]
      : ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"];

  letters.forEach(function (value) {
    let reduceValue = stringValue
      .toLowerCase()
      .split("")
      .reduce((count, item) => (item === value ? ++count : count), 0);

    counter = counter + reduceValue;
  });
  return counter;
};
console.log("Быть или не быть, вОт в чём вопрос".getVowels("о"));
console.log("Быть или не быть, вОт в чём вопрос".getVowels());