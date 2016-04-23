const _CARDS = _.cloneDeep(_.filter(CARDS, 'collectible'))
_CARDS.forEach(val => {
	if (!val.playerClass) {
		val.playerClass = "NEUTURAL"
	}
})
new Vue({
	el: '#deck-builder',
	created: function(){
		this.chunkCards()
	},
	data: {
		CARDS: _CARDS,
		cards: _CARDS,
		costs: [0,1,2,3,4,5,6,7,8,9,'clear'],
		types: ['MINION', 'SPELL','clear'],
		classes: [
			{
				displayName: '战士',
				name: 'WARRIOR'
			},
			{
				displayName: '猎人',
				name: 'HUNTER'
			},
			{
				displayName: '萨满',
				name: 'SHAMAN'
			},
			{
				displayName: '潜行者',
				name: 'ROGUE'
			},
			{
				displayName: '法师',
				name: 'MAGE'
			},
			{
				displayName: '德鲁伊',
				name: 'DRUID'
			},
			{
				displayName: '圣骑士',
				name: 'PALADIN'
			},
			{
				displayName: '术士',
				name: 'WARLOCK'
			},
			{
				displayName: '牧师',
				name: 'PRIEST'
			},
			{
				displayName: '中立',
				name: 'NEUTURAL'
			},
			{
				displayName: '清空职业',
				name: 'clear'
			},
			
		],
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
		PAGE_LIMIT: 8,
		currentPage:0,
	},
	methods: {
		update: function() {
			this.filter(this.filters)
			this.chunkCards()
		},
		filter: function({cost, type, playerClass}) {
			this.currentPage = 0
			// 之所以omitBy一下是因为我又想用解构赋值，又不想参数里出现undefined
			let params = _.omitBy({cost, type, playerClass}, _.isUndefined)
			this.updateFilters(params)
			console.log(this.filters)
			this.cards = _
				.chain(this.CARDS)
				.cloneDeep()
				.filter(card => {
					let valid = false;
					if (_.size(this.filters) > 0){
						_.forEach(this.filters, (filter,filterKey) => {
							_.forEach(filter, val => {
								if (card[filterKey] === val) {
									valid = true
									return false
								} else {
									valid = false
								}
							})
							if (valid === false) return false
						})
						return valid
					} else {
						return true
					}
				})
				.value()
			this.chunkCards()
			return this.cards
		},
		updateFilters: function(params) {
			_.forEach(params, (val, key) => {
				if (val === 'clear' || val.name === 'clear') {
					this.filters = _.omit(this.filters, key)
				} else {
					if (_.isArray(this.filters[key])){
						if (this.filters[key].includes(val)){
							// 正好是1就说明删掉这个就没有 filter 了，所以干脆直接删了
							if (this.filters[key].length === 1){
								this.filters = _.omit(this.filters, key)
							} else {
								_.pull(this.filters[key], val)
							}
						} else {
							this.filters[key].push(val)
						}
					} else {
						this.filters[key] = [val]
					}
				}
			})
			return this.filters
		},
		chunkCards: function() {
			this.cards = _.chunk(this.cards, this.PAGE_LIMIT)
			return this.cards
		},
		nextPage: function() {
			this.currentPage++
		},
		prePage: function() {
			this.currentPage--
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
