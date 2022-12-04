const sides = document.querySelectorAll(".side-input");
const areaBtm = document.querySelector("#check-area");
const outputEl = document.querySelector("#output");

function calculateProductOfSides(a,b){
    const productOfSides = a * b;
    return productOfSides; 
}
function calculateArea() {
    const productOfSides = calculateProductOfSides(Number(sides[0].value), Number(sides[1].value));
    const areaOfTriangle = productOfSides/2;
    outputEl.innerText = "The Area of Triangle" + areaOfTriangle
}

checkBtn.addEventListener("click", calculateArea);