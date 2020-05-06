// filter thumbnails and modal pop up by color or b&w
// change imgObject to only hold color or bw
// make a full galley based on imgObject
// or sort the gallery after onclick of filter
// do mobile
let imgObject = [
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
let images = document.getElementsByClassName('image');
let mainImages = document.querySelector('#main-images');
let mainInfo = document.getElementById('main-info');
let displayImage = document.getElementById('display-image');
let modalImage = document.getElementById('gal-img');
let rightArrow = document.querySelector('#right-arrow');
let leftArrow = document.querySelector('#left-arrow');
let imgInfoH = document.querySelector('#img-info > h2');
let imgInfoP = document.querySelector('#img-info > p');
let photoPosition = 0;
let currentModal;
let galArray = imgObject;
let colorGalArray = [];
let bwGalArray = [];
let galCounter = 0;
galCounter = document.querySelector('#gal-counter');
let galleryCount = imgObject.length;

// Populating color and b&w galleries
for (let i = 0; i < imgObject.length; i++) {
	let inColor = imgObject[i].color;
	// console.log(imgObject[i].title + ' is in color: ' + inColor);

	if (inColor) {
		colorGalArray.push(imgObject[i]);
	} else {
		bwGalArray.push(imgObject[i]);
	}
}

// Populating the main image thumbnails

let pageLoc = location.href.split('/').pop();

if (pageLoc === 'index.html') {
	for (let i = 0; i < 8; i++) {
		mainImages.innerHTML +=
			'<div class="image"><img src="' + imgObject[i].src + '" class="displayed-img" alt=""> </div>';
	}
} else {
	for (let i = 0; i < imgObject.length; i++) {
		mainImages.innerHTML +=
			'<div class="image"><img src="' + imgObject[i].src + '" class="displayed-img" alt=""> </div>';
	}
}

// Open the image in popup
document.addEventListener('click', function(event) {
	if (event.target.classList.contains('displayed-img')) {
		modalImage.innerHTML = event.target.outerHTML;
		let currentModalSrc = document.querySelector('#gal-img > img').attributes[0].value;
		let theIndex = imgObject.findIndex((i) => i.src === currentModalSrc);
		let currentTitle = imgObject[theIndex]['title'];
		let currentDesc = imgObject[theIndex].desc;
		console.log(currentDesc);
		imgInfoP.innerHTML = currentDesc;
		galCounter.innerHTML = theIndex + 1 + ' / ' + galleryCount;
		displayImage.style.display = ' block';
	}
});

// addEventListener
document.addEventListener('click', function(event) {
	if (event.target.classList.contains('gal-options') && event.target.innerText === 'Color') {
		imgObject = colorGalArray;
		mainImages.innerHTML = '';
		for (let i = 0; i < colorGalArray.length; i++) {
			mainImages.innerHTML +=
				'<div class="image"><img src="' + colorGalArray[i].src + '" class="displayed-img" alt=""> </div>';
		}
	} else if (event.target.classList.contains('gal-options') && event.target.innerText === 'B&W') {
		imgObject = bwGalArray;
		console.log('bw array : ', bwGalArray);
		mainImages.innerHTML = '';
		for (let i = 0; i < bwGalArray.length; i++) {
			mainImages.innerHTML +=
				'<div class="image"><img src="' + bwGalArray[i].src + '" class="displayed-img" alt=""> </div>';
		}
		console.log('img object: ', imgObject);
	} else {
		mainImages.innerHTML = '';
		imgObject = galArray;
		for (let i = 0; i < imgObject.length; i++) {
			mainImages.innerHTML +=
				'<div class="image"><img src="' + imgObject[i].src + '" class="displayed-img" alt=""> </div>';
		}
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
	let currentModalSrc = document.querySelector('#gal-img > img').attributes[0].value;
	let theIndex = imgObject.findIndex((i) => i.src === currentModalSrc);

	if (theIndex < imgObject.length - 1) {
		theIndex++;
		console.log(theIndex);
		let currentModalSrc = document.querySelector('#gal-img > img').attributes[0].value;
		let currentTitle = imgObject[theIndex].title;
		let currentDesc = imgObject[theIndex].desc;
		console.log(currentDesc);
		imgInfoP.innerHTML = currentDesc;
		galCounter.innerHTML = theIndex + 1 + ' / ' + galleryCount;
		modalImage.innerHTML = '<img src="' + imgObject[theIndex].src + '" alt"">';
	}
}

function backImg() {
	let currentModalSrc = document.querySelector('#gal-img > img').attributes[0].value;
	let theIndex = imgObject.findIndex((i) => i.src === currentModalSrc);

	if (theIndex > 0) {
		theIndex--;
		console.log(theIndex);
		let currentModalSrc = document.querySelector('#gal-img > img').attributes[0].value;
		let currentTitle = imgObject[theIndex].title;
		let currentDesc = imgObject[theIndex].desc;
		console.log(currentDesc);
		imgInfoP.innerHTML = currentDesc;
		galCounter.innerHTML = theIndex + 1 + ' / ' + galleryCount;
		modalImage.innerHTML = '<img src="' + imgObject[theIndex].src + '" alt"">';
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
