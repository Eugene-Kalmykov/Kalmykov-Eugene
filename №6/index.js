const animal = [
  { name: "cat", color: "red", age: "5", voice: "Meow" },
  { name: "dog", color: "black", age: "7", voice: "Woof" },
  { name: "cow", color: "white", age: "12", voice: "Moo" },
];
class Animal {
  constructor(obj) {
    this.name = obj.name || "some animal";
    this.color = obj.color || "some color";
    this.age = obj.age || "some age";
    this.voice = obj.voice || "some voice";
  }
  say() {
    return `${this.name} say ${this.voice}`;
  }
}
function animalsFabric(animals = animal) {
  if (!Array.isArray(animals)) {
    throw new Error("неверный тип входных данных");
  }
  let objectAnimals = animals.map(function (item) {
    let value = new Animal(item);
    return value;
  });
  return objectAnimals;
}
console.log(animalsFabric([{ name: "cat", color: "red", age: "5" }]));

//solution 2
/*
const animal = [
  { name: "cat", color: "red", age: "5", voice: "Meow" },
  { name: "dog", color: "black", age: "7", voice: "Woof" },
  { name: "cow", color: "white", age: "12", voice: "Moo" },
];
function Animal(obj) {
  this.name = obj.name || "";
  this.color = obj.color || "";
  this.age = obj.age || "";
  this.voice = obj.voice || "";
  this.say = function () {
    return `${this.name} say ${this.voice}`;
  };
}
function animalsFabric(animals = animal) {
  if (Array.isArray(animals)) {
    let objectAnimals = animals.map(function (item) {
      let value = new Animal(item);
      return value;
    });
    return objectAnimals;
  }
  throw new Error("неверный тип входных данных");
}
console.log(animalsFabric());
*/