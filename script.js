const checkbox = document.getElementById('checkbox');
const submitBtn = document.querySelector('button [type=submit]'); 

//disable checkbox
checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
let selectColor = document.getElementById('SelectColor');
selectColor = document.querySelector('SelectColor');

elements.forEach(function (element) {
    const color = getRandomColor();
});           

function getRandomColor() {
    const letter = "0123456789ABCDEF" 
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += mletter[Math.floor(Math.random() * 16)];
    }
    return color
}