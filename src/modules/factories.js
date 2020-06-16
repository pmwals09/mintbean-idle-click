const initialState = {
  trees: 1,
  ciderPresses: 0,
  ciderMills: 0,
  donutMachines: 0,
  donutFactories: 0
}

const ADD_TREE = 'ADD_TREE'

const addTree = trees => {
  return {
    type: ADD_TREE,
    trees
  }
}

const ADD_CIDERPRESS = 'ADD_CIDERPRESS'

const addCiderPress = ciderPresses => {
  return {
    type: ADD_CIDERPRESS,
    ciderPresses
  }
}
const ADD_CIDERMILL = 'ADD_CIDERMILL'

const addCiderMill = ciderMills => {
  return {
    type: ADD_CIDERMILL,
    ciderMills
  }
}
const ADD_DONUTMACHINE = 'ADD_DONUTMACHINE'

const addDonutMachine = donutMachines => {
  return {
    type: ADD_DONUTMACHINE,
    donutMachines
  }
}

const ADD_DONUTFACTORY = 'ADD_DONUTFACTORY'

const addDonutFactory = donutFactories => {
  return {
    type: ADD_DONUTFACTORY
  }
}

const factories = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TREE:
      let newTrees = state.trees + action.trees
      return {...state, trees: newTrees}
    case ADD_CIDERPRESS:
      let newCiderPresses = state.ciderPresses + action.ciderPresses
      return {...state, ciderPresses: newCiderPresses}
    case ADD_CIDERMILL:
      let newCiderMills = state.ciderMills + action.ciderMills
      return {...state, ciderMills: newCiderMills}
    default:
      return state
  }
}

export {
  factories,
  addTree,
  addCiderPress,
  addCiderMill,
  addDonutMachine,
  addDonutFactory
}
