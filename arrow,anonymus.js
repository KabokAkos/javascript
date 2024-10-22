const numbers = [2, 13,3,7,17,5,11,19,9]
const names = ['Eva', 'Adel', 'Cedric', 'Dior', 'Frank', 'Bob']
const fruits = ['pineapple', 'kiwi', 'banana', 'pear', 'cherry']

function sortByLength(tomb){
    tomb.sort((a,b) => a.length - b.length)
    return tomb
}

console.log(names)
console.log(sortByLength([...names]))
console.log(names)

function sortByLengthAsc(tomb){
    tomb.sort((a,b) => {
        if (a.length == b.length){
            return a.localeCompare(b)
        }else {
            return a.length - b.length
        }
    })
    return tomb
}

console.log(sortByLengthAsc([...names]))

function sortFrom15(){
    numbers.sort((a,b) => Math.abs(a-15) - Math.abs(b-15))
    return numbers
} 
console.log(sortFrom15([...names]))

function addAsterisk(tomb){
    let valtozo = tomb.map((item) => `*${item}*`)
    return valtozo
}

console.log(addAsterisk([...names]))

function between5And15(tomb){
    let eredemeny = tomb.filter(item => item >= 5 && item <= 15)
    return eredemeny
}

console.log(between5And15(numbers))

function isAllOdd(tomb){
    return tomb.every(item => item % 2 == 1)
}

console.log(isAllOdd(numbers))

function hasEven(tomb){
    return tomb.some(item => item % 2 == 0)
} 

console.log(hasEven(numbers))

function sigma(tomb){
    return tomb.reduce((total, item) => total * item, 1)
} 

console.log(sigma(numbers))