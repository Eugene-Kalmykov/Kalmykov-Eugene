function getVowels(str) {
  let strng = str;
  
  function count(letter) {
    let counter = 0;
    let letters =
        typeof letter === "string"
          ? [letter]
          : ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"];

    letters.forEach(function (item) {
      let pos = strng.toLowerCase().indexOf(item);
      while (pos !== -1) {
        counter++;
        pos = strng.toLowerCase().indexOf(item, pos + 1);
      }
    });

    return `count("${letters}") = ${counter}`;
  }

  return count;
}
const count = getVowels("Быть или не быть, вОт в чём вопрос.");
console.log(count("о"));
console.log(count("и"));

//solution №2

function getVowels(str) {
  return {
    count(letter) {
      let value = 0;
      let strng = str.toLowerCase();
      let letters =
        typeof letter === "string"
          ? [letter]
          : ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"];

      letters.forEach(function (item) {
        let pos = strng.indexOf(item);
        while (pos !== -1) {
          value++;
          pos = strng.indexOf(letter, pos + 1);
        }
      });
      
      return `count("${letters}") = ${value}`;
    },
  };
}
let count = getVowels("Быть или не быть, вОт в чём вопрос.").count("о");
console.log(count);