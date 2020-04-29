// setTimeout(() => console.log('Hi!'), 1000);
// setTimeout(name => console.log(`Hi! ${name}.`), 1000, 'Lee');
// setTimeout(() => console.log('Hello!'));

const timeoutId = setTimeout(() => console.log('Hi!'), 1000);

clearTimeout(timeoutId);
