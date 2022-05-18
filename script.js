const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const random = document.getElementById("random");



function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + "," 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";
}


function setRandomBG(){
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    let randColor1 = "#" + randomColor1.padStart(6, 0);
    let randColor2 = "#" + randomColor2.padStart(6, 0);
    console.log(randColor1,randColor2);
    color1.value = randColor1;
    color2.value = randColor2;
    setGradient();
}





setGradient();

random.addEventListener("click", setRandomBG);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);





