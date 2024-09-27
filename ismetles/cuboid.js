let length = 10.4;
let width = 13.5;
let height = 8.2;

function cuboid() {
    if (isNaN(height) || isNaN(length) || isNaN(width)){
       console.log("The input is not valid!");
        return;
    }

    let vol = volume(length, width, height);
    let surf = surface(length, width, height);

    console.log("Surface Area: " + surf + "\nVolume: " + vol);

}

function volume(length, width, height){
    return length*width*height;
}

function surface(length, width, height){
    return (2 * ((length * height) + (length * width) + (height * width)));
}

cuboid();
