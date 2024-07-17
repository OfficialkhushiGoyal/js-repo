//Write a program that determines whether a given number is positive or negative.

let a = -2;
if (a<=0){
    console.log("value is negative ");
}
else{
    console.log("value is positive")
}

//Write a program to determine the greater of two numbers

let num1 = 30;
let num2 = 20;

if (num1 > num2) {
  console.log("num1 is greater");
} else {
  console.log("num2 is greater");
}

//Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).

var b = 70;
var grade;

if (b >= 90) {
  grade = "A";
} else if (a >= 80) {
  grade = "B";
} else if (a >= 70) {
  grade = "C";
} else if (a >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("grade" + grade);
