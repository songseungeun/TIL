function biggerThanThree(numbers) {
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 3) {
      //console.log(numbers[i]);
      numbers += numbers[i]
    }
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

