// Je récupere l'élément body.
const body = document.querySelector('body');

// Variable pour la couleur du crayon choisie (blanc par default).
let pencilColor = '#FBFCFC';

// Je créé la div 'pixelsContainer' et lui ajoute une classe.
const pixelsContainer = document.createElement('div');
pixelsContainer.classList = 'pixelsContainer';

// Je créé les pixels grace a une boucle 'for'.
let pixelsNbr = 40;

function createPixels() {
    for (let index = 0; index < pixelsNbr; index++) {
        const column = document.createElement('div');
        column.classList = 'column';
        pixelsContainer.appendChild(column);
        for (let index = 0; index < pixelsNbr; index++) {
            const pixel = document.createElement('div');
            pixel.classList = 'pixel';
            column.appendChild(pixel);
        };
    };
};

createPixels();

// J'organise les éléments (enfants, parents).
body.appendChild(pixelsContainer);

// Construction de la palette de couleurs (variable 'colors' dans '../data/colors.js').
const colorsPalette = document.getElementById('colors-palette');
for (color of colors) {
    const colorChoice = document.createElement('div');
    colorChoice.classList = 'color-choice';
    colorChoice.id = color.name;
    colorChoice.style.backgroundColor = color.code;
    colorChoice.colorCode = color.code;
    colorsPalette.appendChild(colorChoice);
};

//############## Ecouteurs d'évenements ######################
let lespixels = document.querySelectorAll('.pixel');
const columns = document.querySelectorAll('.column');
const spraypaint = document.getElementById('color-icon');
const paletteCloseButton = document.getElementById('colors-palette-close-button');
const colorsChoices = document.querySelectorAll('.color-choice');
const washButton = document.getElementById('wash-icon');
const resizeButton = document.getElementById('grid-resize');
const resizeMenu = document.getElementById('resize-menu');
const gridSizeForm = document.getElementById('grid-Size-Form');
const gridSizeCloseButton = document.getElementById('grid-size-close-button');

// Sur les pixels
function addEventListenerOnPixels(pixels) {
    pixels.forEach(pixel => {
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = pencilColor;
        });
    });
};

addEventListenerOnPixels(lespixels);

// Sur le bouton bombe de peinture
spraypaint.addEventListener('click', () => {
    spraypaint.style.display = 'none';
    washButton.style.display = 'none';
    resizeButton.style.display = 'none';
    colorsPalette.style.display = 'flex';
});

// Sur le bouton fermer la palette
paletteCloseButton.addEventListener('click', () => {
    spraypaint.style.display = 'flex';
    washButton.style.display = 'flex'
    resizeButton.style.display = 'flex';
    colorsPalette.style.display = 'none';
});

// Sur les choix de couleur
colorsChoices.forEach(choice => {
    choice.addEventListener('click', () => {
        pencilColor = choice.colorCode;
        spraypaint.style.backgroundColor = choice.colorCode;
        spraypaint.style.display = 'flex';
        washButton.style.display = 'flex';
        resizeButton.style.display = 'flex';
        colorsPalette.style.display = 'none';
    });
});

// Sur le bouton de nettoyage
washButton.addEventListener('click', () => {
    lespixels.forEach(pixel => {
        pixel.style.backgroundColor = '#FBFCFC';
    });
});

// Sur le boutton pour fermer le menu dimensions
gridSizeCloseButton.addEventListener('click', () => {
    spraypaint.style.display = 'flex';
    washButton.style.display = 'flex'
    resizeButton.style.display = 'flex';
    resizeMenu.style.display = 'none';
});

// Sur le bouton de mesure des dimension
resizeButton.addEventListener('click', () => {
    spraypaint.style.display = 'none';
    washButton.style.display = 'none';
    resizeButton.style.display = 'none';
    resizeMenu.style.display = 'flex';
});

// Sur la validation du formulaire pour la taille de la grille
gridSizeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newGridSize = Number(document.getElementById('new-grid-size').value);
    if (newGridSize) {
        Math.round(newGridSize);
        pixelsNbr = newGridSize;
        for (pixel of lespixels) { pixel.remove() };
        for (column of columns) { column.remove() };
        createPixels();
        lespixels = document.querySelectorAll('.pixel'); // Je met à jour le contenue de la variable qui viens d'être remove.
        addEventListenerOnPixels(lespixels);
    };
    // La nouvelle grille est créé on re-affiche la navbar
    spraypaint.style.display = 'flex';
    washButton.style.display = 'flex'
    resizeButton.style.display = 'flex';
    resizeMenu.style.display = 'none';
});

//#############################################################
