let limit = 100; 
let output = ''; 
for (let count = 1; count <= limit; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
        output += 'fizzbuzz';
    } else if (count % 3 === 0) {
        output += 'fizz';
    } else if (count % 5 === 0) {
        output += 'buzz';
    } else {
        output += count;
    }

    if (count < limit) {
        output += ', '; 
    }
}

console.log(output); 