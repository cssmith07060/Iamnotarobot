const checkbox = document.getElementById('checkbox');
const submitBtn = document.querySelector('button [type=submit]'); 

//disable checkbox
checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
let selectColor = document.getElementById('SelectColor');
selectColor = document.querySelector('SelectColor');

//assign color to Elements
elements.forEach(function (element) {
    const color = getRandomColor();

    element.style.backgroundColor = color;
    selectColor.innerHTML = color;
});           
// genterate random color func
function getRandomColor() {
    const letter = "0123456789ABCDEF" 
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += mletter[Math.floor(Math.random() * 16)];
    }
    return color
}

// check if right color
elements.forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.innerHTML === selectColor.innerHTML)
            alert('You are human')
        checkbox.checked = true;
        submitBtn.disabled = false;
        submitBtn.classList.remove("btn-light");
        }
            
        } else {
          alert("please verify that you are human!")
          location.reload(true);  
            
        }
    });
});
