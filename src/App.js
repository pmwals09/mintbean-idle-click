import React, { useState, useEffect } from 'react';

import Apples from './Apples'
import Money from './Money'
import Trees from './Trees'

function App() {
  const [apples, setApples] = useState(0)
  const [money, setMoney] = useState(0)
  const [trees, setTrees] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setApples(apples + trees)
    }, 1000)
    return () => clearInterval(interval)
  }, [apples, trees])

  const sellApples = qty => {
    if(apples - qty >= 0){
      setApples(apples - qty)
      setMoney(money + qty * 0.8)
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
  }

  const buyCiderMill = qty => {
    const cost = qty * 750
  }

  const buyDonutMachine = qty => {
    const cost = qty * 1500
  }

  return (
    <div className="grid-container">
      <h1 className='text-center'>Apple Farmer</h1>
      <Money
        money={money}
      />
      <Apples
        apples={apples}
        sellApples={sellApples}
      />
      <Trees
        trees={trees}
        buyTrees={buyTrees}
      />
    </div>
  );
}

export default App;
