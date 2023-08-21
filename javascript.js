

const gridContainer = document.getElementById('gridContainer');
const sliderValue = document.getElementById('slider');
const gridItem = document.querySelectorAll('#gridContainer > *');

const clearBtn = document.querySelector('#clear > button');


let sliderNewValue = sliderValue.value;

//div generator
function gridGenerator(x) {
    gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    
    for (let row = 0; row < x; row++) {
        for (let column = 0; column < x; column++) {
            const box = document.createElement('div');
            box.classList.add('gridItem');
            gridContainer.appendChild(box);
    
            box.addEventListener('mouseover', function () {
                box.style.backgroundColor = 'black';
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



