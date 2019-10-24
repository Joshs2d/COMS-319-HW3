var rs = require('readline-sync');

var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var fNum3 = rs.question('3rd Number: ');
var fNum4 = rs.question('4th Number: ');

//determines the factorial
var result1 = fNum1;
for(i = fNum1-1; i> 1; i--){
	result1 *= i;
}

//determines the sum of all digits
var result2 = 0;
result2 = fNum2.toString().split('').map(Number).reduce(function(a,b){return a + b;},0);

//determines the reverse order of the digits
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
result3 = reverse_a_number(fNum3);

//determines if the order of numbers is a palindrome (same forwards and backwards) same as previous except add a true or false statement
var result4 = fNum4;
var answer = "False";
var temp = reverse_a_number(fNum4);
if(result4 === temp){
	answer = "True";
}

var result1 = eval(result1);
var result2 = eval(result2);
var result3 = eval(result3);
var result4 = answer;

console.log("Factorial of  the 1st number is = ", result1);
console.log("The sum of all digits of the 2nd number is = ", result2);
console.log("The reverse of the 3rd number is = ", result3);
console.log("Is the 4th number a palindrome (True/False)? = ", result4);
