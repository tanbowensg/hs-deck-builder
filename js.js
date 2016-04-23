const _CARDS = _.take(_.filter(CARDS, 'collectible'),100)
new Vue({
	el: '#deck-builder',
	data: {
		cards: _CARDS,
		costs: [0,1,2,3,4,5,6,7,8,9,'clear'],
		types: ['MINION', 'SPELL','clear'],
		mechanics: [
			{
				displayName: '冲锋',
				name:'CHARGE'
			},
			{
				displayName: '亡语',
				name: 'DEATHRATTLE'
			},
			{
				displayName: '战吼',
				name: 'BATTLECRY'
			},
		],
		filters: {},
	},
	methods: {
		filter: function({cost, type}) {
			// 之所以omitBy一下是因为我又想用解构赋值，又不想参数里出现undefined
			let params = _.omitBy({cost, type}, _.isUndefined)
			this.updateFilters(params)
			console.log(JSON.stringify(this.filters))
			this.cards = _.filter(_CARDS, this.filters)
		},
		updateFilters: function(params) {
			_.forEach(params, (val, key) => {
				console.log(val)
				if (val === 'clear') {
					console.log('omit', this.filters, key)
					this.filters = _.omit(this.filters, key)
				} else {
					this.filters[key] = val
				}
			})
		}
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
