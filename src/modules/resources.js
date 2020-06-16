const initialState = {
  apples: 0,
  ciders: 0,
  donuts: 0
}

const ADD_APPLE = 'ADD_APPLE'

const addApple = apples => {
  return {
    type: ADD_APPLE,
    apples
  }
}

const SELL_APPLE = 'SELL_APPLE'

const sellApple = apples => {
  return {
    type: SELL_APPLE,
    apples
  }
}

const ADD_CIDER = 'ADD_CIDER'

const addCider = ciders => {
  return {
    type: ADD_CIDER,
    ciders
  }
}

const SELL_CIDER = 'SELL_CIDER'

const sellCider = ciders => {
  return {
    type: SELL_CIDER,
    ciders
  }
}

const ADD_DONUT = 'ADD_DONUT'

const addDonut = donuts => {
  return {
    type: ADD_DONUT,
    donuts
  }
}

const SELL_DONUT = 'SELL_DONUT'

const sellDonut = donuts => {
  return {
    type: SELL_DONUT,
    donuts
  }
}

const resources = (state = initialState, action) => {
  switch(action.type) {
    case ADD_APPLE:
      let moreApples = state.apples + action.apples
      return {...state, apples: moreApples}
    case SELL_APPLE:
      let lessApples = state.apples - action.apples > 0 ? state.apples - action.apples : state.apples
      return {...state, apples: lessApples}
    case ADD_CIDER:
      let newCiders = state.ciders + action.ciders
      return {...state, ciders: newCiders}
    case SELL_CIDER:
    case ADD_DONUT:
      let newDonuts = state.donuts + action.donuts
      return {...state, donuts: newDonuts}
    case SELL_DONUT:
    default:
      return state
  }
}

export {
  resources,
  addApple,
  addCider,
  addDonut,
  sellApple,
  sellCider,
  sellDonut
}



const sellApples = qty => {
  if(apples - qty >= 0){
    addApple(-qty)
    setMoney(money + qty * 0.8)
  }
}

const sellCider = qty => {
  if(ciders - qty >= 0){
    addCider(-qty)
    setMoney(money + qty * 1.6)
  }
}

const sellDonuts = qty => {
  if(donuts - qty >= 0){
    addDonut(-qty)
    setMoney(money + qty * 3.20)
  }
}

const buyTrees = qty => {
  const cost = qty * 7.5
  if(money >= cost) {
    setTrees(trees + qty)
    setMoney(money - cost)
  }
}

const buyCiderPress = qty => {
  const cost = qty * 75
  if(money >= cost) {
    setCiderPresses(ciderPresses + 1)
    setMoney(money - cost)
  }
}

const buyCiderMill = qty => {
  const cost = qty * 750
  if(money >= cost) {
    setCiderMills(ciderMills + 1)
    setMoney(money - cost)
  }
}

const buyDonutMachine = qty => {
  const cost = qty * 1500
  if(money >= cost) {
    setDonutMachines(donutMachines + 1)
    setMoney(money - cost)
  }
}

const buyDonutFactory = qty => {
  const cost = qty * 3000
  if(money >= cost) {
    setDonutFactories(donutFactories + 1)
    setMoney(money - cost)
  }
}
