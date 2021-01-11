interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

class Todo implements ITodo {
  constructor (
    public id: number,
    public content: string,
    public completed: boolean
  ) { }
}

const todo = new Todo(1, 'TypeScript', false);

console.log(todo);

interface IPerson {
  name: string;
  sayHello(): void;
}

class Person implements IPerson {
  constructor(public name: string) {}

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

function greeter(person: IPerson): void {
  person.sayHello();
}

const me = new Person('Lee');
greeter(me);