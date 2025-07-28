// Higher Order function are the function that either takes Function as input Parameter or return a function

var arr = [10, 20, 30]

arr.filter((indivisualElement) => {
  if(indivisualElement > 100) {
    return false;
  }
  return true;
})

function Employee() {
  var empName = "Mayank"

  function getName() {
    return empName;
  }

  return getName;
}

// 1st way to create Function

export function abcd(userName, userAge) {
  console.log(userName, userAge)
}

// 2nd Way to create Function

export var abc = (userName, userAge) => {
  console.log(userName, userAge)
}
