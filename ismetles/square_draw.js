let size = 6;

function drawSquare(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
                row += '%';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

if (isNaN(size) || size <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    drawSquare(size);
}