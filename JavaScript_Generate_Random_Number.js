
/* This JavaScript function generates a random number between 0 and 10. */
/* Written by Vakindu Philliam. */

function randomMaker(range) {		

  var rand=Math.floor(range*Math.random());

  return rand;

}

var number = randomMaker(10);

//Print Output

document.write(number);

