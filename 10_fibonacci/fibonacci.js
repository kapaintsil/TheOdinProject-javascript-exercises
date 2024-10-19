const fibonacci = function(number) {

  number = Number(number);
  
  let a = 0, b = 1, temp;
  if(number === 0) {
    return a;
  }
  else if(number < 0 ) {
    return "OOPS";
  }
  else {
    for(let i = 2; i <= number; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}

// Do not edit below this line
module.exports = fibonacci;
