let number = 10;

while (number <= 30) {
    let divisors = [];
    let divisor = 2;

    while (divisor <= number) {
        if (number % divisor === 0) {
            divisors.push(divisor);
        }
        divisor++;
    }

    console.log(number +": " + divisors);
    number++;
}