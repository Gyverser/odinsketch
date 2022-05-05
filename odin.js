const containerDiv = document.querySelector('.container');
const button = document.querySelector('.createBtn');
const clearBtn = document.querySelector('.clear');
let squares = 16;

containerDiv.style.display = 'grid';
containerDiv.style.gridTemplateColumns = `repeat(${squares}, 1fr)`
containerDiv.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

for (i = 0; i < squares**2; i++) {
    const div = document.createElement('div');
    containerDiv.appendChild(div)[i];
    div.addEventListener('mouseenter', function() {
        div.style.backgroundColor = 'black';
    });
}

function createGrid() {
    const input = prompt('Choose between 1 and 100 squares.')
    clear();
    if (input > 100 || input < 0) {
        clear();
        alert('Choose a number between 1 and 100');
    };
    for (i = 0; i < input**2; i++) {
        const divara = document.createElement('div');
        containerDiv.appendChild(divara)[i];
        divara.addEventListener('mouseenter', function() {
            divara.style.backgroundColor = rgbColor();
        });
    }
    containerDiv.style.display = 'grid'
    containerDiv.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${input}, 1fr)`;
}


function rgbColor() {
     let R = Math.floor(Math.random() * 255);
     let G = Math.floor(Math.random() * 255);
     let B = Math.floor(Math.random() * 255);
     return `rgb(${R}, ${G}, ${B})`;
}

function clear() {
    while (containerDiv.firstChild){
    containerDiv.removeChild(containerDiv.lastChild);
    };    
};

clearBtn.addEventListener('click', clear);
button.addEventListener('click', createGrid);
