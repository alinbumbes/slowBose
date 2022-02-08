"use strict";
// create an instance of a class via constructor functions

const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const alin = new Person("Alin", 1992);
console.log(alin);
console.log(alin.constructor.name);
console.log(alin instanceof Person);
console.log(Person.prototype);
console.log(Person.constructor.name);
alin.calcAge();
console.log("----------------------------------");
console.log(Object.getPrototypeOf(alin) === Person.prototype);

// create an instance of a class via ES6 CLasses
class PersonClass {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  hey() {
    console.log(`hey method works for ${this.name} born on ${this.birthYear}`);
  }
}

const alinClass = new PersonClass("alin", 1987);

console.log(alinClass);
console.log(alinClass.constructor.name);

alinClass.hey();
