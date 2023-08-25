

const gridContainer = document.getElementById('gridContainer');
const gridItem = document.querySelectorAll('#gridContainer > *');

const clearBtn = document.querySelector('#clear > button');


//grid generator
function gridGenerator(x) {
    gridRemover();
    gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    
    for (let row = 0; row < x; row++) {
        for (let column = 0; column < x; column++) {
            const box = document.createElement('div');
            box.classList.add('gridItem');
            gridContainer.appendChild(box);
    
            box.addEventListener('mouseover', function () {
                const gridColor = document.getElementById('gridColor').value;
                box.style.backgroundColor = `${gridColor}`;
            });

        }
    }
}

// Grid Remover
function gridRemover() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
      }
}

// Clear grid colors
function clearGridColors() {
    const gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white';
    });
}

// Grid color Default
clearBtn.onclick = function () {
    clearGridColors();
};

//gridGenerator caller on the change of the value of the slider
function gridGeneratorCaller() {
    const sliderValue = document.getElementById('rangeInput').value;
    gridGenerator(sliderValue);
    
}

//Default Grid
gridGenerator(16);

