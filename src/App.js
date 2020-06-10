import React, { useState, useEffect } from 'react';

import Resource from './Resource'
import Factory from './Factory'
import Money from './Money'

function App() {
  const [apples, setApples] = useState(0)
  const [money, setMoney] = useState(0)
  const [trees, setTrees] = useState(1)
  const [ciders, setCiders] = useState(0)
  const [ciderPresses, setCiderPresses] = useState(0)
  const [ciderMills, setCiderMills] = useState(0)
  const [donuts, setDonuts] = useState(0)
  const [donutMachines, setDonutMachines] = useState(0)
  const [donutFactories, setDonutFactories] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setApples(apples + 1)
    }, 1000/trees)
    return () => clearInterval(interval)
  }, [apples, trees])

  useEffect(() => {
    const interval = setInterval(() => {
      if(ciderPresses > 0){
        setCiders(ciders + 1)
      }
    }, 1000/(ciderPresses + 1.5 * ciderMills))
    return () => clearInterval(interval)
  }, [ciders, ciderPresses, ciderMills])

  useEffect(() => {
    const interval = setInterval(() => {
      if(donutMachines > 0) {
        setDonuts(donuts + 1)
      }
    }, 1000/(donutMachines + 2 * donutFactories))
    return () => clearInterval(interval)
  }, [donuts, donutMachines, donutFactories])

  const sellApples = qty => {
    if(apples - qty >= 0){
      setApples(apples - qty)
      setMoney(money + qty * 0.8)
    }
  }

  const sellCider = qty => {
    if(ciders - qty >= 0){
      setCiders(ciders - qty)
      setMoney(money + qty * 1.6)
    }
  }

  const sellDonuts = qty => {
    if(donuts - qty >= 0){
      setDonuts(donuts - qty)
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

export default App;
