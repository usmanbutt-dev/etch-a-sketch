let grid = document.querySelector(".grid");
let gridSize = (grid.offsetWidth)
let gridBoxes = document.querySelectorAll(".grid-boxes");
let colorChooser = document.querySelector("#chosen-color");
let gridSizer = document.querySelector("#grid-sizer");
let chosenSize = document.querySelector("#chosen-size");
let eraser = document.querySelector(".eraser-mode");
let colorMode = document.querySelector(".color-mode");
let clearMode = document.querySelector(".clear-all");
let chosenColor = "black";
let isMouseDown = false;


clearMode.addEventListener("click",()=>{
    gridBoxes.forEach(box => {
        box.style.backgroundColor = "white";        
    });
});

eraser.addEventListener("click", ()=>{
    chosenColor = "white";
})

colorMode.addEventListener("click", ()=> {
    chosenColor = colorChooser.value;
})

colorChooser.addEventListener(`input`, () => {
    chosenColor = colorChooser.value;
})

gridSizer.addEventListener(`input`, () => {
    chosenSize.innerHTML = gridSizer.value + " x " + gridSizer.value;
    gridBoxes.forEach(box => {
        box.remove();
    });
    for(let i = 0; i < gridSizer.value*gridSizer.value; i++) {
        let newBox = document.createElement("div");
        newBox.classList.add("grid-boxes");
        newBox.style.width = ((gridSize)/gridSizer.value) + "px";
        newBox.style.height = ((gridSize)/gridSizer.value) + "px";
        grid.appendChild(newBox);
    }
    gridBoxes = document.querySelectorAll(".grid-boxes");
    addBoxFunctionality();
})


function addBoxFunctionality() {
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
}

document.addEventListener("DOMContentLoaded",addBoxFunctionality);
