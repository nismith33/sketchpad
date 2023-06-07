const sketchpad = document.querySelector('.sketchpad');
addCells(sketchpad, 10);

function addCells(sketchpad,cellsPerRow) {
    for (let i = 0; i< cellsPerRow**2 ; i++) {
        const cell = document.createElement('div');
        //the cell class name will be used for clearing the board
        cell.className = "cell";
        cell.style.height = 'auto';
        cell.style.flex = `1 0 ${(1/cellsPerRow)*100}%`;
        cell.addEventListener('mouseenter', colorCell);
        sketchpad.appendChild(cell);
    }
}

function colorCell() {
    this.style.backgroundColor = 'black';
}

//slider logic
const slider = document.querySelector('.slider');
console.log(slider);
const sliderValue = document.querySelector('.sliderValue')
slider.addEventListener('change', updateCells)
slider.addEventListener('input', function() {
    sliderValue.textContent = this.value;
});



function updateCells() {
    removeCells(sketchpad);
    addCells(sketchpad,this.value);
}

function removeCells(sketchpad) {
    while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.firstChild);
    }
}