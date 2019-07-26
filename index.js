

var submit1 = $('.submit1');
var number1 = $('.number1');
var return1 = $('.return1');

submit1.on('click', checkNumber1);


function checkNumber1() {

  if (number1.val() % 2 == 0) {
    return1.append(`<h2>Even</h2>`)

  }

  else {
    return1.append(`<h2>Odd</h2>`)
  }

}

var submit2 = $('.submit2');
var number2 = $('.number2');
var return2 = $('.return2');

submit2.on('click', checkNumber2);


function checkNumber2() {

  if (number2.val() == 15) {
    return2.append(`<h2>Fizzbuzz</h2>`)
  }

  else if (number2.val() % 5 == 0){
    return2.append(`<h2>Buzz</h2>`)
  }

  else if (number2.val() % 3 == 0) {
    return2.append(`<h2>Fizz</h2>`)

  }

  else {
    return2.append(`<h2>Not a multiple of 3 or 5</h2>`)
  }

}
