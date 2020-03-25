// Array.prototype.map()

const arr1 = [1, 4, 9, 16];

const map1 = arr1.map(x => x * 2);

console.log(map1);

const map2 = arr1.map(function (x) {
  return x + 2;
})

console.log(map2);

// arr.map(callback(currentValue[, index[, array]])[, thisArg])
// arr.map (새로운 배열 요소를 생성하는 함수
// (3가지 인수> 처리할 현재 요소, 처리할 현재 요소의 인덱스, map()을 호출한 배열), 
// callback을 실행할 때 this로 사용되는 값)

// 반환 값 > 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열

// map은 callback 함수의 각각에 요소에 대해 한번씩 순서대로 부른다.
// undefined도 포함해서 배열값이 들어있는 인덱스만 호출한다.
// 값이 삭제되거나 할당/정의되지 않은 인덱스에 대해서는 호출하지 않는다.

// callback은 호출될 때 대상 요소의 값, 인덱스, 원본배열 3가지 인수를 전달 받는다.
// thisArg 가 전달된 경우 callback 함수의 this 값으로 사용된다.

// map은 호출한 배열의 값을 변형하지 않는다. 단, callback 함수에 의해 변형될 수 있다.
// map이 처리할 요소의 범위는 첫 callback을 호출하기 전에 정해지고,
// 시작한 이후 추가된 요소들은 callback을 호출하지 않는다.
// 배열에 존재하는 요소들의 값이 바뀐경우, map이 방문하는 시점의 값이 callback에 전달된다.

let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt); // 제곱근
// numbers.map(item => Math.sqrt(item));

console.log(roots);


// map을 활용해 배열 속 객체를 재구성하기

let kvArray = [{key: 1, value: 10},
              {key: 2, value: 20},
              {key: 3, value: 30}];

let reformattedArray = kvArray.map(function(obj){
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(reformattedArray);
console.log(kvArray);

let kbArray2 = [{key: 1, value: 100},
                {key: 2, value: 200},
                {key: 3, value: 300}];

let newArray = kbArray2.map(function(obj) {
  console.log(obj.key);
  console.log(obj.value);
  let rObj2 = {};
  rObj2[obj.key] = obj.value;
  return rObj2
});

console.log(newArray);

let newArray2 = kbArray2.map(obj => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj
})

console.log(newArray2);

let numbers2 = [1, 4, 9];
let doubles = numbers.map(function(num){
  return num * 2;
});

console.log(doubles);

// ASCII 인코딩 값을 요소로 갖는 배열
let map = Array.prototype.map;
let a = map.call('Hello World', function(x) {return x.charCodeAt(0);
});

console.log(a);

const oneTwoThree = [1, 2, 3];
let result;

result = oneTwoThree.map((v) => {
  if (v % 2) {
    return '홀수';
  }
  return '짝수';
});

console.log(result);
