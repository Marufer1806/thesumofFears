function FindSumA(numbers, answer) {
  //loop through the array and add tha abjacent number and check for the answer

  let checkValue = 0;
  let found = false;

  //[10, 15, 7, 3] startIndex = 0 , endIndex = 3

  for (let i = 0; i <= numbers.length - 2; i++) {
    //loop over the array in the after the current value
    for (let y = i + 1; y <= numbers.length - 1; y++) {
      if ((answer = numbers[i] + numbers[y])) {
        found = true;
        return found;
      }
    }
  }
  return found;
}
//[10, 15, 3, 7].... sort [3, 7, 10, 15]
//sorted array method
function FindSumB(numbers, answer) {
  let found = false;
  let checkValue = 0;
  //sort the array
  numbers.sort(function (a, b) {
    return a - b;
  });

  let startIndex = 0;
  let endIndex = numbers.length - 1;

  do {
    checkValue = numbers[startIndex] + numbers[endIndex];
    if (answer == checkValue) {
      found = true;
      break;
    } else if (answer > checkValue) {
      startIndex++;
    } else if (answer < checkValue) {
      endIndex--;
    }
  } while (found == false && startIndex < endIndex);
  return found;
}
//better or more elegant way
function FindSumC(numbers, answer) {
  let checkValue = 0;
  let found = false;
  for (let i = 0; i <= numbers.length - 1; i++) {
    checkValue = answer - numbers[i];
    if (numbers.includes(checkValue, i + 1)) {
      found = true;
      break;
    }
  }
  return found;
}

//return all paossivle
function FindSumD(numbers, answer) {
  let checkValue = 0;
  let checkIndex = -1;
  let ansArray = [];

  for (let i = 0; i <= numbers.length - 1; i++) {
    checkValue = answer - numbers[i];
    checkIndex = numbers.indexOf(checkValue);

    if (checkIndex != -1 && checkIndex != i) {
      //add the 2 numbers to the array
      ansArray.push(numbers[i] + " + " + checkValue);
      //remove the 2nd number from the array
      numbers.splice(checkIndex, 1);
    }
  }
  return ansArray;
}

function DisplaySum() {
  let answer = document.getElementById("sumValue").value;
  //let numArray = [10, 15, 3, 7, 2, 8, 16];
let numArray = GeneratedNumbers(20)

  //show the array on the screen
  document.getElementById("numList").innerHTML = numArray.toString();
  let found = FindSumC(numArray, answer);
  document.getElementById("results").innerHTML = found.toString();
}

function DisplayAllSums() {
  let answer = document.getElementById("sumValue").value;
 // let numArray = [10, 15, 3, 7, 2, 8, 16];

 let numArray = GeneratedNumbers(20)
  //show the array on the screen
  document.getElementById("numList").innerHTML = numArray.toString();
  let found = FindSumD(numArray, answer).join("<br>");
  document.getElementById("results").innerHTML = found.toString();
}

//generate randow numbers
function GeneratedNumbers(max) {
  var arr = [];
  while (arr.length < max) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) == -1) {
      arr.push(r);
    }
  }
  return arr;
}
