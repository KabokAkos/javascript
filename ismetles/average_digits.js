let number = 268;
let sum = 0;
let count = 0;

let numberString = number.toString();

for (let i = 0; i < numberString.length; i++) {
    sum += parseInt(numberString[i]);
    count ++;
}

let average = sum / count;

console.log("The average of digits is " + average)