const _CARDS = _
  .chain(CARDS)
  .cloneDeep()
  .filter('collectible')
  .forEach(val => {
    if (!val.playerClass) {
      val.playerClass = "NEUTURAL"
    }
    val.inDeck = 0
  })
  .sortBy('cost')
  .value()
  
const cardViewer = new Vue({
	el: '#deck-builder',
	created: function(){
		this.chunkCards()
	},
	data: {
		CARDS: _CARDS,
		cards: _CARDS,
		costs: [
			{
				displayName: "0费",
				name: [0],
				selected : false 
			},
			{
				displayName: "1费",
				name: [1],
				selected: false 
			},
			{
				displayName: "2费",
				name: [2],
				selected: false 
			},
			{
				displayName: "3费",
				name: [3],
				selected: false 
			},
			{
				displayName: "4费",
				name: [4],
				selected: false 
			},
			{
				displayName: "5费",
				name: [5],
				selected: false 
			},
			{
				displayName: "6费",
				name: [6],
				selected: false 
			},
			{
				displayName: "7费",
				name: [7],
				selected: false 
			},
			{
				displayName: "8费",
				name: [8],
				selected: false 
			},
			{
				displayName: "9费",
				name: [9],
				selected: false 
			},
      {
				displayName: "10+费",
				name: [10, 12, 20],
				selected: false 
			},
		],
		types: [
			{
				displayName: '随从',
				name: ['MINION'],
				selected: false
			},
			{
				displayName: '法术',
				name: ['SPELL'],
				selected: false
			},
		],
		classes: [
			{
				displayName: '战士',
				name: ['WARRIOR',],
				selected: false
			},
			{
				displayName: '猎人',
				name: ['HUNTER',],
				selected: false
			},
			{
				displayName: '萨满',
				name: ['SHAMAN',],
				selected: false
			},
			{
				displayName: '潜行者',
				name: ['ROGUE',],
				selected: false
			},
			{
				displayName: '法师',
				name: ['MAGE',],
				selected: false
			},
			{
				displayName: '德鲁伊',
				name: ['DRUID',],
				selected: false
			},
			{
				displayName: '圣骑士',
				name: ['PALADIN',],
				selected: false
			},
			{
				displayName: '术士',
				name: ['WARLOCK',],
				selected: false
			},
			{
				displayName: '牧师',
				name: ['PRIEST',],
				selected: false
			},
			{
				displayName: '中立',
				name: ['NEUTURAL',],
				selected: false
			},
		],
		mechanics: [
			{
				displayName: '冲锋',
				name: ['CHARGE']
			},
			{
				displayName: '亡语',
				name: ['DEATHRATTLE']
			},
			{
				displayName: '战吼',
				name: ['BATTLECRY']
			},
		],
		filters: {},
		PAGE_LIMIT: 8,
		currentPage:0,
		deck:[],
	},
	methods: {
		handleFilterClick: function ({cost, type, playerClass}, filterInfo) {
			// 之所以omitBy一下是因为我又想用解构赋值，又不想参数里出现undefined
			const params = _.omitBy({cost, type, playerClass}, _.isUndefined)
			// 在处理 selected,因为vm 里的过滤器名字是复数的，所以要另传一个filterInfo
			filterInfo.selected = !filterInfo.selected
			this.currentPage = 0
			this.updateFilters(params)
			this.filter(params)
		},
		filter: function(params) {
			this.cards = _
				.chain(this.CARDS)
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
        .sortBy('cost')
				.value()
			this.chunkCards()
			return this.cards
		},
		updateFilters: function(params) {
			_.forEach(params, (val, key) => {
				if (_.isArray(this.filters[key])){
          // 判断现在的filters 里的 filter 和点击的 filter 是否有交集
          console.log(_.intersection(this.filters[key], val))
					if (_.intersection(this.filters[key], val).length > 0){
						// 正好是1就说明删掉这个就没有 filter 了，所以干脆直接删了
						if (this.filters[key].length === 1){
							this.filters = _.omit(this.filters, key)
						} else {
							this.filters[key] = _.difference(this.filters[key], val)
						}
					} else {
						this.filters[key] = this.filters[key].concat(val)
					}
				} else {
					this.filters[key] = val
				}
			})
      console.log(this.filters)
			return this.filters
		},
		handleCardClick: function(card) {
			switch(card.inDeck) {
				case 2:
					return false
				case 1:
          if (card.rarity === 'LEGENDARY') {
            return false
          }
					card.inDeck = 2
					break
				default:
					this.deck.push(card)
					card.inDeck = 1
					break
			}
      // this.deckLength = _.reduce(this.deck, (sum, val) => {
      //   return sum + val.inDeck
      // },0)
      console.log(this.deck)
			console.log(card.inDeck)
		},
		handleDeckClick: function(card) {
			switch(card.inDeck) {
				case 2:
					card.inDeck = 1
					break
				case 1:
					card.inDeck = 0
          console.log(this.deck, [card])
					this.deck = _.filter(this.deck, val => {return !(val.name === card.name)})
          console.log('现在的',this.deck)
			}
      
		},
    getDeckLength: function() {
      return _.reduce(this.deck, (sum, val) => {
        return sum + val.inDeck
      },0)
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
