let currentHours = 14;
let currentMinutes = 34;
let currentSeconds = 42;

const totalSecondsInDay = 24 * 60 * 60; 

const secondsPassed = (currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds;

const remainingSeconds = totalSecondsInDay - secondsPassed;

console.log(remainingSeconds);