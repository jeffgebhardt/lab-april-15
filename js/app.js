function sum(numOne, numTwo){
  var answer = numOne + numTwo;
  var sumOutput = document.getElementById('sum');
  sumOutput.textContent = '\"The sum of ' + numOne + ' and ' + numTwo + ' is ' + answer + '\"';
  return answer;
};

function multiply(numOne, numTwo){
  var answer = numOne * numTwo;
  var multiplyOutput = document.getElementById('multiply');
  multiplyOutput.textContent = '\"The product of ' + numOne + ' and ' + numTwo + ' is ' + answer + '\"';
  return answer;
};

function sumAndMultiply(numOne, numTwo, numThree){
  var answer = [];

  var x = sum(numOne, numTwo);
  answer.push(sum(x, numThree));
  var y = multiply(numOne, numTwo);
  answer.push(multiply(y, numThree));

  var sumAndMultiplyOutputOne = document.getElementById('sumAndMultiplyOne');
  var sumAndMultiplyOutputTwo = document.getElementById('sumAndMultiplyTwo');

  sumAndMultiplyOutputOne.textContent = '\"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' sum to ' + answer[0] + '\"';
  sumAndMultiplyOutputTwo.textContent = '\"The  numbers ' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + answer[1] + '\"';

  return answer;
}

function sumArray(array){
  var total = 0;

  for(i = 0; i < array.length; i++){
    total += array[i];
  }

  var sumArrayOutput = document.getElementById('sumArray');

  console.table(array);
  sumArrayOutput.textContent = '\"' + array + ' was passed in as an array of numbers, and ' + total + ' is their sum.\"';
}

function multipyArray(array){
  var total = 1;

  for(i = 0; i < array.length; i++){
    total *= array[i];
  }

  var multiplyArrayOutput = document.getElementById('multiplyArray');

  console.table(array);
  multiplyArrayOutput.textContent = 'The numbers ' + array + ' have a product of ' + total + '.\"';
}
