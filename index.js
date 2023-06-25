let gridSize = 16;

const button = document.getElementById('grid-size-btn');
button.addEventListener('click', reDrawGrid)

const container = document.getElementById('container')

function drawGrid(gridSize) {
    // Clear existing grid
    container.innerHTML = "";

    // Set dimensions of grid
    let gridWidth = Math.min(container.clientWidth, container.clientHeight) * 0.75;
    console.log(gridWidth);
    let cellSize = gridWidth / gridSize;
    console.log(cellSize);

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.className = "row";
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const pixel = document.createElement('div');
            pixel.className = "pixel";
            pixel.addEventListener('mouseover', changeColor);
            row.appendChild(pixel);
            pixel.style.width = `${cellSize}px`;
            pixel.style.height = `${cellSize}px`;
        }
    }
}

function reDrawGrid() {
    let newGridSize;
    do {
        newGridSize = prompt("Enter grid size less than or equal to 100:", 16);
    } while (newGridSize > 100);
    drawGrid(newGridSize);
}

function changeColor(e) {
    this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

drawGrid(gridSize);
