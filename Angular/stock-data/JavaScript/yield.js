// Generators...

function* generateRandomNumber() {
  var data = 10000
  var dataOne = 20000


  yield data;
  yield dataOne;
}

var streamData = generateRandomNumber();

var dataFirst = streamData.next()
console.log(dataFirst)

var dataSecond = streamData.next()
console.log(dataSecond)

var dataThird = streamData.next()
console.log(dataThird)
