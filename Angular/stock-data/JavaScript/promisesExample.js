var myPromise = new Promise(function(resolved, reject) {
  setTimeout(() => {
    var random = Math.floor(Math.random() * 100);
    if(random % 2 == 0) {
      resolved("The Number is Even..")
    } else {
      reject("This number is Odd....")
    }
  }, 10000)
})

myPromise.then(function success(data) {
  console.log("Message is: " + data)
}, function failure(data) {
  console.log("Message is: " + data)
})
