function cuboid() {
    const l = parseFloat(document.getElementById("l").value);
    const b = parseFloat(document.getElementById("b").value);
    const h = parseFloat(document.getElementById("h").value);

    if (isNaN(h) || isNaN(l) || isNaN(b)){
        document.getElementById("output").innerHTML = "The input is not valid!";
        return;
    }

    const vol = volume(l, b, h);
    const surf = surface(l, b, h);

    document.getElementById("output").innerHTML = "Surface Area: " + surf + "<br>Volume: " + vol ;

}

function volume(l, b, h){
    return l*b*h;
}

function surface(l, b, h){
    return (2 * ((l * h) + (l * b) + (h * b)));
}
