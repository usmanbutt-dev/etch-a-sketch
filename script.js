let gridBoxes = document.querySelectorAll(".grid-boxes");
let colorChooser = document.querySelector("#chosen-color");
let gridSizer = document.querySelector("#grid-sizer");
let chosenSize = document.querySelector("#chosen-size");
let chosenColor = "black";
let isMouseDown = false;

colorChooser.addEventListener(`input`, () => {
    chosenColor = colorChooser.value;
})

gridSizer.addEventListener(`input`, () => {
    console.log(chosenSize);
    chosenSize.innerHTML = gridSizer.value + " x " + gridSizer.value;
    console.log(chosenSize);
})


gridBoxes.forEach(box => {
    box.addEventListener("mousedown", () => {
        isMouseDown = true;
        box.style.backgroundColor = chosenColor;
        console.log(isMouseDown);
    })
});

gridBoxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        if(isMouseDown) {
            box.style.backgroundColor = chosenColor;
            console.log(isMouseDown);
        }
    })
})

document.addEventListener("mouseup", ()=> {
    isMouseDown = false;
    console.log(isMouseDown);
})