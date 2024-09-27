let years = [2000, 2004, 1904, 2024, 1600, 1900, 1929, 1933, 2023, 1867];

function getLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    
        {
            console.log(year + " is a Leap year!");
    
    } else {
    
        console.log(year + " is not leap year!");
    
        }
    }

    for (let i = 0; i < years.length; i++) {
        getLeapYear(years[i]);
    }