function sum(numOne, numTwo){
  var answer = numOne + numTwo;
  //console.log('\"The sum of ' + numOne + ' and ' + numTwo + ' is ' + answer + '\"');
  return answer;
};

function multiply(numOne, numTwo){
  var answer = numOne * numTwo;
  //console.log('\"The product of ' + numOne + ' and ' + numTwo + ' is ' + answer + '\"');
  return answer;
};

function sumAndMultiply(numOne, numTwo, numThree){
  var answer = [];

  var x = sum(numOne, numTwo);
  answer.push(sum(x, numThree));
  var y = multiply(numOne, numTwo);
  answer.push(multiply(y, numThree));

  console.log('\"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' sum to ' + answer[0] + '\"');
  console.log('\"The  numbers ' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + answer[1] + '\"');
}
