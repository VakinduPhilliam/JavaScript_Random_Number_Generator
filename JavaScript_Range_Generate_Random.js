/* This JavaScript function generates a random number from a given range of numbers. */

var numbers = [10,12,3,14,5];

function randomMaker(range) {		

  var rand=Math.floor(range*Math.random());

  return rand;

}

var number = randomMaker(numbers.length);

//Print Output

document.write(numbers[number]);