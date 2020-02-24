//var num = 2;

//var kind = (num > 0) ? '양수' : '음수';
//console.log(kind);



////////////

var num = 0;

var kind = num !== 0 ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind);


////////////

var str = 'Hello world!';
var count = 0;

for (var i = 0; i < str.length; i++) {
  if (str[i] === 'l') count++;
}


console.log(count);
