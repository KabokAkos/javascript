function divide(a,b) {
    return a / b;
}

function multiple(a,b) {
    return a * b;
}

function sum(a,b) {
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function muvelet(a,b, fgv) {
    return fgv(a,b);
}

const osszeg = (a, b) =>{
    return a + b;
}

const osszeg2 = (a, b) => a + b;
const kivonas = (a, b) => a - b;
const szorzas = (a, b) => a * b;
const osztas = (a, b) => a / b;
const muveletek = (a, b, fgv) => fgv(a + b);
const rendez = (array) => array.sort((a, b) => b - a);

console.log(sum(3,2));
console.log(subtraction(3,2));
console.log(multiple(3,2));
console.log(divide(3,2));
console.log(muvelet(3,2, sum));
console.log(rendez([2345,67,0,345,69,89]));