
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(2,5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
  console.log(shape.getArea());
})

type Person = {
  name: string;
  age?: number;
}

type Developer = Person & {
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20
};

const expert: Developer = {
  name: '김개발',
  skills: ['JavaScript', 'React', 'TypeScript']
}

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'orange';