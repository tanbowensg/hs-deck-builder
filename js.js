function getIDByName(name) {
	let temp
	_.forEach(CARDS, val => {
		if (val.name === name) {
			temp = val.id
			return false
		}
	})
	return temp
}

function idifyDeck(deck) {
	return _.map(deck, val => {
		return getIDByName(val)
	})
}

function objectifyDeck(deck) {
	return _.map(deck, card => {
		return _.find(CARDS, {name: card})
	})
}
