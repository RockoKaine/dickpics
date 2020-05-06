let fullImgGallery = [
	{
		title: "Punk N' Green",
		desc: 'I shot this cool cat here on a trip down Telegraph Ave Berkeley, Ca',
		src: './incs/imgs/gallery/punkNGreen.jpg',
		color: true
	},
	{
		title: 'Boat Yard',
		desc: 'This was an old boat yard Richmond, Ca',
		src: './incs/imgs/gallery/boatYard.jpg',
		color: false
	},
	{
		title: "Fixed Gear Cruisin'",
		desc: "I shot this while I myself was cruisin' in San Francisco, Ca",
		src: './incs/imgs/gallery/fixedCruisin.jpg',
		color: false
	},
	{
		title: 'Fixed Gear in Amsterdam',
		desc: 'Amsterdam was one of my favorite places to visit, I loved seeing all of the bikes everywhere',
		src: './incs/imgs/gallery/fixterdam.jpg',
		color: true
	},
	{
		title: 'Locked Up',
		desc: "It's gotta be the latin in her, she looks like a smooth criminal here",
		src: './incs/imgs/gallery/lockedUp.jpg',
		color: false
	},

	{
		title: 'Stay Winning',
		desc: 'I got a picture of this snap walking home from work in El Cerrito Ca',
		src: './incs/imgs/gallery/stayWinning.jpg',
		color: true
	},
	{
		title: "Stop Taggin'",
		desc: "Stop? Please don't",
		src: './incs/imgs/gallery/stopTaggin.jpg',
		color: true
	},
	{
		title: 'T!ny',
		desc: 'It is my homie T!ny at a Nerd event, it was good times',
		src: './incs/imgs/gallery/t1ny.jpg',
		color: false
	},
	{
		title: 'Skunk Funk',
		desc: 'It is my homie T!ny at a Nerd event, it was good times',
		src: './incs/imgs/gallery/_MG_7613.jpg',
		color: true
	},
	{
		title: 'Good Night Ben',
		desc: 'It is my homie T!ny at a Nerd event, it was good times',
		src: './incs/imgs/gallery/IMG_2328.jpg',
		color: true
	},
	{
		title: 'Violen',
		desc: 'It is my homie T!ny at a Nerd event, it was good times',
		src: './incs/imgs/gallery/IMG_3299.jpg',
		color: false
	},
	{
		title: 'Drinks Down Tags Up',
		desc: 'It is my homie T!ny at a Nerd event, it was good times',
		src: './incs/imgs/gallery/IMG_3364.jpg',
		color: true
	}
];
const closeBtn = document.querySelector('#gal-closer');
const images = document.getElementsByClassName('image');
const mainImages = document.querySelector('#main-images');
const mainInfo = document.getElementById('main-info');
const displayImage = document.getElementById('display-image');
const modalImage = document.getElementById('gal-img');
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
const imgInfoH = document.querySelector('#img-info > h2');
const imgInfoP = document.querySelector('#img-info > p');
let currentModalSrc;
let theIndex;
let currentTitle;
let currentDesc;
let bwGal = [];
let colorGal = [];
let filteredGal = fullImgGallery;
let galCounter = document.querySelector('#gal-counter');
let galleryCount = filteredGal.length;

function Gallery(gal, galLeng) {
	this.gal = gal;
	this.galLeng = galLeng;

	this.init = function() {
		if (this.galLeng === 'All' || isNaN(this.galLeng)) {
			fullImgGallery.forEach((image, index) => {
				mainImages.innerHTML +=
					'<div class="image"><img src="' + image.src + '" class="displayed-img" alt=""> </div>';
			});
		} else {
			this.gal.splice(this.galLeng);
			galleryCount = this.gal.length;
			fullImgGallery.forEach((image, index) => {
				mainImages.innerHTML +=
					'<div class="image"><img src="' + image.src + '" class="displayed-img" alt=""> </div>';
			});
		}
	};
	this.init();
	// filtering the gallery
	document.addEventListener('click', (event) => {
		if (event.target.innerText === 'Color') {
			mainImages.innerHTML = '';
			for (var i = 0; i < this.gal.length; i++) {
				if (this.gal[i].color === true) {
					colorGal.push(this.gal[i]);

					mainImages.innerHTML +=
						'<div class="image"><img src="' + this.gal[i].src + '" class="displayed-img" alt=""> </div>';
				}
			}
			filteredGal = colorGal;
			galleryCount = filteredGal.length;
			return colorGal;
		} else if (event.target.innerText === 'B&W') {
			mainImages.innerHTML = '';
			for (var i = 0; i < this.gal.length; i++) {
				if (this.gal[i].color === false) {
					bwGal.push(this.gal[i]);

					mainImages.innerHTML +=
						'<div class="image"><img src="' + this.gal[i].src + '" class="displayed-img" alt=""> </div>';
				}
			}
			filteredGal = bwGal;
			galleryCount = filteredGal.length;
			return bwGal;
		} else if (event.target.innerText === 'All') {
			mainImages.innerHTML = '';

			for (var i = 0; i < this.gal.length; i++) {
				mainImages.innerHTML +=
					'<div class="image"><img src="' + this.gal[i].src + '" class="displayed-img" alt=""> </div>';
			}
			filteredGal = fullImgGallery;
			galleryCount = filteredGal.length;
			return filteredGal;
		}
	});

	// modal popup

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('displayed-img')) {
			modalImage.innerHTML = e.target.outerHTML;
			currentModalSrc = document.querySelector('#gal-img > img').attributes[0].value;
			theIndex = filteredGal.findIndex((i) => i.src === currentModalSrc);
			currentTitle = filteredGal[theIndex]['title'];
			currentDesc = filteredGal[theIndex].desc;
			imgInfoP.innerHTML = currentDesc;
			// galCounter.innerHTML = theIndex + 1 + ' / ' + galleryCount;
			galleryCount = filteredGal.length;
			displayImage.style.display = 'block';
		}
	});

	// close display-image

	function closeDisplay() {
		displayImage.style.display = 'none';
	}
	closeBtn.addEventListener('click', closeDisplay);
	document.addEventListener('keydown', function(e) {
		if (e.keyCode === 27) {
			closeDisplay();
		}
	});

	// next and back image function

	function nextImg() {
		currentModalSrc = document.querySelector('#gal-img > img').attributes[0].value;
		theIndex = filteredGal.findIndex((i) => i.src === currentModalSrc);
		if (theIndex < filteredGal.length - 1) {
			theIndex++;
			console.log(theIndex);
			currentModalSrc = document.querySelector('#gal-img > img').attributes[0].value;
			currentTitle = filteredGal[theIndex].title;
			currentDesc = filteredGal[theIndex].desc;
			imgInfoP.innerHTML = currentDesc;
			// galCounter.innerHTML = theIndex + 1 + ' / ' + galleryCount;
			modalImage.innerHTML = '<img src="' + filteredGal[theIndex].src + '" class="displayed-img"  alt"">';
		}
	}

	function backImg() {
		currentModalSrc = document.querySelector('#gal-img > img').attributes[0].value;
		theIndex = filteredGal.findIndex((i) => i.src === currentModalSrc);
		if (theIndex > 0) {
			theIndex--;
			console.log(theIndex);
			currentModalSrc = document.querySelector('#gal-img > img').attributes[0].value;
			currentTitle = filteredGal[theIndex].title;
			currentDesc = filteredGal[theIndex].desc;
			imgInfoP.innerHTML = currentDesc;
			// galCounter.innerHTML = theIndex + 1 + ' / ' + galleryCount;
			modalImage.innerHTML = '<img src="' + filteredGal[theIndex].src + ' " class="displayed-img" alt"">';
		}
	}

	rightArrow.addEventListener('click', nextImg);
	leftArrow.addEventListener('click', backImg);
	document.addEventListener('keydown', function(e) {
		if (e.keyCode === 37) {
			backImg();
		} else if (e.keyCode === 39) {
			nextImg();
		}
	});
}
