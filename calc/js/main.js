$(document).ready(function(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#all-clear').click(clear);
  $('.operator').click(storeData);
  $('#equal').click(crunchNumbers);
});

var x;
var operator;
var output;

function clickNumber(){
  var num = $(this).text();
  var display = $('#input').val();
  output = (display === '0') ? num : display + num;
  $('#input').val(output);
}

function clickDecimal(){
  var display = $('#input').val();
  var output = display.indexOf('.') !== -1 ? display : display += '.';
  $('#input').val(output);
}

function clear(){
  $('#input').val('0');
}

function storeData(){
  operator = $(this).attr("value");
  console.log(operator);
  var lastNum = $('#input').val();
  x = parseFloat($('#input').val());
  clear();
}

function crunchNumbers(){
  console.log('click');
  var y = parseFloat($('#input').val());
  console.log(x, y);
  var result;
  switch (operator){
    case '+':
    console.log('operator');
      result = x + y;
      console.log(result);
      break;
    case '-':
      result = x - y;
      console.log(result);
      break;
    case '*':
      result = x * y;
      console.log(result);
      break;
    case '/':
      result = x / y;
      console.log(result);
  }
  $('#input').val(result);
}
