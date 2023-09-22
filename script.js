let gridBoxes = document.querySelectorAll(".grid-boxes");
console.log(gridBoxes);

gridBoxes.forEach(box => {
    box.addEventListener("mousemove", () => {
        box.style.backgroundColor = "brown";
    })
});