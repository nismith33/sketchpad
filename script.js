const sketchpad = document.querySelector('.sketchpad');
let mode = 'fill'
addCells(sketchpad, 10);

function addCells(sketchpad,cellsPerRow) {
    for (let i = 0; i< cellsPerRow**2 ; i++) {
        const cell = document.createElement('div');
        cell.className = '0';
        cell.style.height = 'auto';
        cell.style.backgroundColor = 'white';
        cell.style.flex = `1 0 ${(1/cellsPerRow)*100}%`;
        cell.addEventListener('mouseenter', colorCell);
        sketchpad.appendChild(cell);
    }
}

function colorCell() {
    if (+this.className<=10) {
        if (mode==='shade') {
            this.className = +this.className + 1;
            this.style.filter = `brightness(${1-(+this.className/10)})`;
        }
        else if (mode==='fill') {
            this.style.backgroundColor = 'black';
            this.className = '11';
        }
    }
}

//slider logic
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.sliderValue')
slider.addEventListener('change', updateCells)
slider.addEventListener('input', function() {
    sliderValue.textContent = this.value;
});

function updateCells() {
    removeCells(sketchpad);
    addCells(sketchpad,+sliderValue.textContent);
}

function removeCells(sketchpad) {
    while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.firstChild);
    }
}

//Reset button logic
const reset = document.querySelector('.reset');
reset.addEventListener('click', updateCells);

//Drawmode buttons logic
const fill = document.querySelector('.fill');
const shade = document.querySelector('.shade');

fill.addEventListener('click', drawModeSelect);
shade.addEventListener('click', drawModeSelect);

function drawModeSelect() {
    fill.classList.toggle('selected');
    shade.classList.toggle('selected');
    mode = document.querySelector('.selected').classList[0];
}