import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import {addApple, addCider, addDonut} from './modules/resources'
import {sellApple, sellCider, sellDonut} from './modules/resources'
import {addTree, addCiderPress, addCiderMill, addDonutMachine, addDonutFactory} from './modules/factories'
import {addMoney, spendMoney} from './modules/money'

import Resource from './components/Resource'
import Factory from './components/Factory'
import Money from './components/Money'


const App = () => {
  const apples = useSelector(state => state.apples)
  const ciders = useSelector(state => state.ciders)
  const donuts = useSelector(state => state.donuts)
  const trees = useSelector(state => state.trees)
  const ciderPresses = useSelector(state => state.ciderPresses)
  const ciderMills = useSelector(state => state.ciderMills)
  const donutMachines = useSelector(state => state.donutMachines)
  const donutFactories = useSelector(state => state.donutFactories)
  const money = useSelector(state => state.money)

  useEffect(() => {
    const interval = setInterval(() => {
      addApple(1)
    }, 1000/trees)
    return () => clearInterval(interval)
  }, [apples, trees])

  useEffect(() => {
    const interval = setInterval(() => {
      if(ciderPresses > 0){
        addCider(1)
      }
    }, 1000/(ciderPresses + 1.5 * ciderMills))
    return () => clearInterval(interval)
  }, [ciders, ciderPresses, ciderMills])

  useEffect(() => {
    const interval = setInterval(() => {
      if(donutMachines > 0) {
        addDonut(1)
      }
    }, 1000/(donutMachines + 2 * donutFactories))
    return () => clearInterval(interval)
  }, [donuts, donutMachines, donutFactories])

  return (
    <div className="grid-container">
      <h1 className='text-center'>Apple Farmer</h1>
      <Money
        money={money}
      />
      <Resource
        item={'apple'}
        qty={apples}
        profit={'$0.80/ea'}
        sellableQtys={[1, 10, 50, 100]}
        fn={sellApples}
      />
      <Factory
        item={'tree'}
        qty={trees}
        cost={'$7.50/ea'}
        buyableQty={[1, 5, 10, 20]}
        fn={buyTrees}
      />
      {ciderPresses > 0 &&
        <Resource
          item={'cider'}
          qty={ciders}
          profit={'$1.60/ea'}
          sellableQtys={[1, 10, 50, 100]}
          fn={sellCider}
        />
      }
      <Factory
        item={'ciderpres'}
        qty={ciderPresses}
        cost={'$75/ea'}
        buyableQty={[1, 5, 10, 15]}
        fn={buyCiderPress}
      />
      {ciderPresses > 0 &&
        <Factory
          item={'cidermill'}
          qty={ciderMills}
          cost={'$750/ea'}
          buyableQty={[1, 5, 10, 15]}
          fn={buyCiderMill}
        />
      }
      {donutMachines > 0 &&
        <Resource
          item={'donut'}
          qty={donuts}
          profit={'$3.20/ea'}
          sellableQtys={[1, 12, 24, 48]}
          fn={sellDonuts}
        />
      }
      <Factory
        item={'donut Machine'}
        qty={donutMachines}
        cost={'$1,500/ea'}
        buyableQty={[1, 3, 6, 12]}
        fn={buyDonutMachine}
      />
      {donutMachines > 0 &&
        <Factory
          item={'donut Factory'}
          qty={donutFactories}
          cost={'$3,000/ea'}
          buyableQty={[1, 3, 6, 12]}
          fn={buyDonutMachine}
        />
      }
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     apples: state.apples,
//     ciders: state.ciders,
//     donuts: state.donuts
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    addApple: apples => dispatch(addApple(apples)),
    addCider: ciders => dispatch(addCider(ciders)),
    addDonut: donuts => dispatch(addDonut(donuts))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
