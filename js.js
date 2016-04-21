function getIDByName(name) {
	let temp
	_.forEach(CARDS, val => {
		if (val.name === name && (val.type ==='MINION' || val.type ==='SPELL')) {
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
	deck = idifyDeck(deck)
	return _.map(deck, card => {
		return _.find(CARDS, {id: card})
	})
}

function statisticDeck(deck) {
	deck = objectifyDeck(deck)
	return {
		type: _.countBy(deck, 'type'),
		race: _.omit(_.countBy(deck, 'race'),'undefined'),
		mechanics: _.omit(_.countBy(_.flatten(_.map(deck, 'mechanics'))),'undefined'),
		set: _.countBy(deck, 'set'),
		cost: _.countBy(deck, 'cost')
	}
}
