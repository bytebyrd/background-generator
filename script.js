var firstColor = document.getElementsByName('color1')[0];
var secondColor = document.getElementsByName('color2')[0];
var css = document.querySelector('h3');
var body = document.getElementById('gradient');



function changeBackground(){
    body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
    printCSS();
}

function printCSS(){
 css.textContent = body.style.background;
}

//initalize gradient
// From http://stackoverflow.com/a/5365036/2065702
// 1 << 24 = 1000000000000000000000000 * Math.random to hex
const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
const randomColor2 = "#"+((1<<24)*Math.random()|0).toString(16);
var one = 1 << 24;
firstColor.value = randomColor;
secondColor.value = randomColor2;


changeBackground();
firstColor.addEventListener('input', changeBackground)
secondColor.addEventListener('input', changeBackground)