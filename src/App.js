import React, { useState, useEffect } from 'react';

import Apples from './Apples'
import Money from './Money'
import Trees from './Trees'

function App() {
  const [apples, setApples] = useState(0)
  const [money, setMoney] = useState(0)
  const [trees, setTrees] = useState(1)

  const growApples = trees => {
    setInterval(() => {
      setApples(apples + trees)
    }, 1000)
  }

  useEffect(
    growApples(trees)
  )


  const sellApples = qty => {
    setApples(apples - qty)
    setMoney(money + qty * 0.8)
  }

  return (
    <div className="grid-container">
      <h1 className='text-center'>Apple Farmer</h1>
      { /* Money goes here */ }
      <Money />
      { /* Apples goes here */ }
      <Apples
        apples={apples}
        setApples={setApples}
        sellApples={sellApples}
      />
      { /* Trees goes here */ }
      <Trees
        trees={trees}
        setTrees={setTrees}
      />
    </div>
  );
}

export default App;
