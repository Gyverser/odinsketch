const containerDiv = document.querySelector('.container');
const button = document.querySelector('.createBtn');

function createDiv16() {
    for(i = 0; i < 256; i++) {
        const div = document.createElement('div')
        containerDiv.appendChild(div)[i];
        div.className = 'createDiv';
    }
    button.removeEventListener('click', createDiv);
}

function createDiv32() {
    for(i = 0; i < 1024; i++) {
        const div = document.createElement('div');
        containerDiv.appendChild(div)[i];
        div.className = 'createDiv'
    };
}

function createDiv64() {
    for(i = 0; i < 4096; i++) {
        const div = document.createElement('div');
        containerDiv.appendChild(div)[i];
        div.className = 'createDiv';
    };
}

function createDiv100() {
    for(i = 0; i < 10000; i++) {
        const div = document.createElement('div');
        containerDiv.appendChild(div)[i];
        div.classname = 'createDiv';
        div.addEventListener('mouseenter', function () {
            div.style.backgroundColor = 'black';
        });
    };
}

function createDiv() {
    const input = prompt('Choose 16, 32, 64 or 100 squares!');

    if (input === '16') {
        createDiv16();
        containerDiv.style.display = 'grid';
        containerDiv.style.gridTemplateColumns = 'repeat(16, 1fr)';
        containerDiv.style.gridTemplateRows = 'repeat(16, 1fr)';
    } else if (input === '32') {
        createDiv32();
        containerDiv.style.display = 'grid';
        containerDiv.style.gridTemplateColumns = 'repeat(32, 1fr)';
        containerDiv.style.gridTemplateRows = 'repeat(32, 1fr)';
    } else if (input === '64') {
        createDiv64();
        containerDiv.style.display = 'grid';
        containerDiv.style.gridTemplateColumns = 'repeat(64, 1fr)';
        containerDiv.style.gridTemplateRows = 'repeat(64, 1fr)';
    } else if (input === '100') {
        createDiv100();
        containerDiv.style.display = 'grid';
        containerDiv.style.gridTemplateColumns = 'repeat(100, 1fr)';
        containerDiv.style.gridTemplateRows = 'repeat(100, 1fr)';
    };
};





function clear() {
    
}


button.addEventListener('click', createDiv);

