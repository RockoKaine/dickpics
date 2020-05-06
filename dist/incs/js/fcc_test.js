// Setup
var collection = {
	2548: {
		album: 'Slippery When Wet',
		artist: 'Bon Jovi',
		tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ]
	},
	2468: {
		album: '1999',
		artist: 'Prince',
		tracks: [ '1999', 'Little Red Corvette' ]
	},
	1245: {
		artist: 'Robert Palmer',
		tracks: []
	},
	5439: {
		album: 'ABBA Gold'
	}
};

// Only change code below this line
function updateRecords(id, prop, value) {
	if (this.id && this.prop && this.value === '') {
		return collection;
	} else if (this.prop === '') {
		return collection;
	} else if (this.value === '') {
		return collection;
	} else {
		if (this.prop === 'tracks') {
			collection[id][this.prop].push(value);
			return collection;
		} else {
			collection[id][prop] = value;
			return collection;
		}
	}
}

console.log(updateRecords(5439, 'artist', 'ABBA'));
console.log(updateRecords(5439, 'tracks', 'Take a Chance on Me'));
console.log(updateRecords(2548, 'artist', ''));
console.log(updateRecords(1245, 'tracks', 'Addicted to Love'));
