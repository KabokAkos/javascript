function isLeapYear(year) {

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const testYears = [2000, 2004, 1904, 2024, 1600, 1900, 1929, 1933, 2023, 1867];

testYears.forEach(year => {
    if (isLeapYear(year)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}); 
