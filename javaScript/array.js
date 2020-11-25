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

let list = [
  "British Longhair",
  "British Shorthair",
  "Chantilly-Tiffany",
  "Chartreux",
  "Chausie",
  "Cheetoh",
  "Colorpoint Shorthair",
  "Cornish Rex",
  "Exotic Shorthair",
  "Havana Brown",
  "Himalayan",
  "Khao Manee",
  "Munchkin",
  "Savannah",
  "Scottish Fold",
  "Snowshoe",
  "Sphynx",
  "Turkish Angora",
  "Turkish Van",
  "York Chocolate",
];
let list2 = [];

list.map((a) => console.log(a));
