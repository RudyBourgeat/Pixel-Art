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

// Ecouteur de clics
const lespixels = document.querySelectorAll('.pixel');

lespixels.forEach(pixel => {
    pixel.addEventListener('click', () => {
        pixel.style.backgroundColor = pencilColor;
    });
});
