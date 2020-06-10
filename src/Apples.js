import React from 'react'

import FnButton from './FnButton'

const Apples = ({apples, sellApples}) => {
  return (
    <div className='grid-x grid-margin-x align-middle'>
      <div className='cell auto'>
        <div className='grid-y'>
          <h3 className='cell'>Apples: <span>{apples}</span></h3>
          <p className='cell'>Profit: $0.80/ea</p>
        </div>
      </div>
      <FnButton item={'apple'} action={'Sell'} fn={sellApples} qty={1} />
      <FnButton item={'apple'} action={'Sell'} fn={sellApples} qty={10} />
      <FnButton item={'apple'} action={'Sell'} fn={sellApples} qty={50} />
      <FnButton item={'apple'} action={'Sell'} fn={sellApples} qty={100} />
    </div>
  )
}

export default Apples
