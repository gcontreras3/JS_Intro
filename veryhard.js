
var operand = prompt('select and operand +, -, *, /.');
var x = parseInt(prompt('What is the first number'));
var y = parseInt(prompt('What is the second number'));
var add = '+';
var subtract = '-';
var multiply = '*';
var divide = '/';
var value;

if (operand == '+') {
    value = x + y;
    console.log(`The sum of ${x} and ${y} is ${value}.`);
} else if (operand == '-') {
    value = x - y;
    console.log(`The difference of ${x} and ${y} is ${value}.`);
} else if (operand == '*') {
    value = x * y;
    console.log(`The product of ${x} and ${y} is ${value}.`);
} else if (operand == '/') {
    value = x / y;
    console.log(`The quotient of ${x} and ${y} is ${value}.`);
} else {
    console.log('error');
}

// console.log(value);

