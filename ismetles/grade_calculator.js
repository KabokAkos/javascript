let score = 75;

function getLetterGrade(score) {
    if (score >= 90) {
        return '5';
    } else if (score >= 80) {
        return '4';
    } else if (score >= 70) {
        return '3';
    } else if (score >= 60) {
        return '2';
    } else {
        return '1';
    }
}

score = Number(score);

if (!isNaN(score) && score >= 0 && score <= 100) {
    let letterGrade = getLetterGrade(score);
    console.log("Your letter grade is:", letterGrade);
} else {
    console.log("Please enter a valid score between 0 and 100.");
}