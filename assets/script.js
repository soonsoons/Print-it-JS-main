const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
];

const left = document.querySelector('.arrow_left'); // Sélectionne l'élément HTML avec la classe 'arrow_left' et l'assigne à la variable 'left'
const right = document.querySelector('.arrow_right'); // Sélectionne l'élément HTML avec la classe 'arrow_right' et l'assigne à la variable 'right'

let index = 0; // Initialise la variable 'index' à 0

left.addEventListener('click', () => {
	console.log("Clique de la flèche gauche");
	index = (index - 1);
	updateSlide(index, 'left');
});

right.addEventListener('click', () => {
	console.log("Clique de la flèche droite");
	index = (index + 1);
	updateSlide(index, 'right');
});


