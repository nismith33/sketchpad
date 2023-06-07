const sketchpad = document.querySelector('.sketchpad');
console.log(sketchpad)

function addCells(sketchpad,cellsPerRow) {
    const cellSideLength = Math.round(Math.floor(sketchpad.clientWidth/cellsPerRow));
    for (let i = 0; i< cellsPerRow**2 ; i++) {
        const cell = document.createElement('div');
        //the cell class name will be used for clearing the board
        cell.className = "cell";
        cell.style.width = `${cellSideLength}px`;
        cell.style.height = `${cellSideLength}px`;
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

function updateCells() {
    removeCells(sketchpad);
    sliderValue.textContent = this.value;
    addCells(sketchpad,this.value);
}

function removeCells(sketchpad) {
    while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.firstChild);
    }
}