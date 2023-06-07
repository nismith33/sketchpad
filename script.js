const sketchpad = document.querySelector('.sketchpad');

function addCells(sketchpad,cellsPerRow) {
    const cellSideLength = Math.round(Math.floor(sketchpad.clientWidth/cellsPerRow));
    for (let i = 0; i< cellsPerRow**2 ; i++) {
        const cell = document.createElement('div');
        cell.style.width = `${cellSideLength}px`;
        cell.style.height = `${cellSideLength}px`;
        cell.addEventListener('mouseenter', colorCell);
        sketchpad.appendChild(cell);
    }
}

function colorCell() {
    this.style.backgroundColor = 'black';
}