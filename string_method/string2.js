let txt = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quo autem voluptatibus repellendus, ut magnam sunt? Quae, explicabo repudiandae enim nesciunt esse facere magni voluptas, odit officia vitae repellat molestias.";
console.log("Exercise 1.");
console.log(txt.slice(0, 6));

console.log("Exercise 2.");
console.log(txt.slice(4, 9));

console.log("Exercise 3.");
console.log(txt.substring(4, txt.lenght));

console.log("Exercise 4.");
console.log(txt.substring((4, 10)));

console.log("Exercise 5.");
console.log(txt.toUpperCase(txt));

console.log("Exercise 6.");
let modifiedforsix = '';
for (let i = 0; i < txt.length; i++) {
    result6 += i % 2 === 0 ? txt[i].toLowerCase() : txt[i].toUpperCase();
}
console.log(modifiedforsix);

console.log("Exercise 7.");
let modifiedforseven = txt.replace(/e/g, "E");
console.log(modifiedforseven);

console.log("Exercise 8.");
let modifiedforeight = txt.split("e");
console.log(modifiedforeight);
