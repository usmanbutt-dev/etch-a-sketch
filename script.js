let gridBoxes = document.querySelectorAll(".grid-boxes");
let isMouseDown = false;

gridBoxes.forEach(box => {
    box.addEventListener("mousedown", () => {
        isMouseDown = true;
        box.style.backgroundColor = "brown";
        console.log(isMouseDown);
    })
});

gridBoxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        if(isMouseDown) {
            box.style.backgroundColor = "brown";
            console.log(isMouseDown);
        }
    })
})

document.addEventListener("mouseup", ()=> {
    isMouseDown = false;
    console.log(isMouseDown);
}) 