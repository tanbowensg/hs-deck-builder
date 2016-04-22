const _CARDS = _.take(_.filter(CARDS, 'collectible'),100)
new Vue({
	el: '#deck-builder',
	data: {
		cards: _CARDS,
		costs: [0,1,2,3,4,5,6,7,8,9]
	},
	methods: {
		filterCost: function(cost) {
			this.cards = _.filter(_CARDS, {cost: cost})
		},
	}
})

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
