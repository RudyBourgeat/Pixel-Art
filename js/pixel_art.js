// Je récupere l'élément body.
const body = document.querySelector('body');

// Variable pour la couleur du crayon choisie (blanc par default).
let pencilColor = '#F0F';

// Je créé la div 'pixelsContainer' et lui ajoute une classe.
const pixelsContainer = document.createElement('div');
pixelsContainer.classList = 'pixelsContainer';

// Je créé les pixels grace a une boucle 'for'.
const pixelsNbr = 40;

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
const lespixels = document.querySelectorAll('.pixel');
const subTitle = document.getElementById('subTitle');
const spraypaint = document.getElementById('color-icon');
const paletteCloseButton = document.getElementById('colors-palette-close-button');
const colorsChoices = document.querySelectorAll('.color-choice');

// Sur les pixels
lespixels.forEach(pixel => {
    pixel.addEventListener('click', () => {
        pixel.style.backgroundColor = pencilColor;
    });
});

// Sur le bouton bombe de peinture
spraypaint.addEventListener('click', () => {
    spraypaint.style.display = 'none';
    subTitle.style.display = 'none';
    colorsPalette.style.display = 'flex';
});

// Sur le bouton fermer la palette
paletteCloseButton.addEventListener('click', () => {
    spraypaint.style.display = 'flex';
    subTitle.style.display = 'block';
    colorsPalette.style.display = 'none';
});

// Sur les choix de couleur
colorsChoices.forEach(choice => {
    choice.addEventListener('click', () => {
        pencilColor = choice.colorCode;
        spraypaint.style.backgroundColor = choice.colorCode;
        spraypaint.style.display = 'flex';
        subTitle.style.display = 'block';
        colorsPalette.style.display = 'none';
    });
});

//#############################################################
