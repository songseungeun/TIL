let arr = [];

function biggerThanThree(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
      arr = [...arr, numbers[i]];
    }
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
biggerThanThree(numbers); // [4, 5, 6, 7]
console.log(arr);
