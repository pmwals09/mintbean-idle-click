const initialState = {
  money: 0
}

const ADD_MONEY = 'ADD_MONEY'

const addMoney = amount => {
  return {
    type: ADD_MONEY,
    amount
  }
}

const SPEND_MONEY = 'SPEND_MONEY'

const spendMoney = amount => {
  return {
    type: SPEND_MONEY,
    amount
  }
}

const money = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MONEY:
      let moreMoney = state.money + action.amount
      return {...state, money: moreMoney}
    case SPEND_MONEY:
      let lessMoney = state.money - action.amount
      return {...state, money: lessMoney}
    default:
      return state
  }
}

export {
  money,
  addMoney,
  spendMoney
}
