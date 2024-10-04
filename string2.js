let txt = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quo autem voluptatibus repellendus, ut magnam sunt? Quae, explicabo repudiandae enim nesciunt esse facere magni voluptas, odit officia vitae repellat molestias.";
console.log("1. feladat: ")
console.log(txt.slice(0, 6));
console.log("2. feladat: ")
console.log(txt.slice(4, 9));
console.log("3. feladat: ")
console.log(txt.substring(4, txt.lenght));
console.log("4. feladat: ")
console.log(txt.substring((4, 10)));
console.log("5. feladat: ")
console.log(txt.toUpperCase(txt));

console.log("6. feladat: ")

let modifiedText = '';
let ePositions = [];

for (let i = 0; i < txt.length; i++) {
    let char = txt[i];

    if (i % 2 === 1) {
        char = char.toUpperCase();
    }
    
    if (char === 'e') {
        ePositions.push(i); 
        char = 'E'; 
    }
    
    modifiedText += char; 
}

console.log("Módosított szöveg:", modifiedText);
console.log("E betűk pozíciói:", ePositions);