
// This code will remove all of the divs inside the gridContainer
// const gridContainer = document.getElementById('gridContainer');

// button.onclick = function () {
//     while (gridContainer.hasChildNodes()) {
//         gridContainer.removeChild(gridContainer.firstChild);
//       }
// }



//div generator

const gridContainer = document.getElementById('gridContainer');

let x = 64;
gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

for (let row = 0; row < x; row++) {
    for (let column = 0; column < x; column++) {
        const box = document.createElement('div');
        box.classList.add('gridItem');
        gridContainer.appendChild(box);

        box.addEventListener('mouseover', function () {
            console.log('in event listener');
            box.style.backgroundColor = 'black';
        });
    }
}

