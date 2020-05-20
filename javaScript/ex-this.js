function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  return 2 * this.radius;
};

const circle = new Circle(5);
console.log(circle.getDiameter());

const person = {
  name: "Lee",
  getName() {
    console.log(this);
    return this.name;
  },
};
console.log(person.getName());

function Person(name) {
  this.name = name;
  console.log(this);
}

const me = new Person("Lee");
const me2 = new Person("song");
