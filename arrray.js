function getOtosLotteryNumbers() {
    let szamok = []; 

    for (let i = 0; i < 5; i++) {
        let number = Math.floor(Math.random() * 90) + 1;
        szamok.push(number); 
    }
    return szamok;
}

console.log(getOtosLotteryNumbers());

function getSortedtLotteryNumbers() {
    let szamok = getOtosLotteryNumbers();
    szamok.sort(function(a, b){return a - b});
    return szamok;
}

console.log(getSortedtLotteryNumbers());

function getNumberOfHits() {
    let huzott = [];
    let szamok = getOtosLotteryNumbers();

    for (let i = 0; i < 5; i++) {
        let number = Math.floor(Math.random() * 90) + 1;
        huzott.push(number); 
    }

    let talalat = 0;

    for (let i = 0; i < huzott.length; i++) {
        for (let j = 0; j < szamok.length; j++) {
            if (huzott[i] === szamok[j]) {
                talalat++;
                break; 
            }
        }
    }
    
    return talalat;
}

console.log(getNumberOfHits());