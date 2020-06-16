import React from 'react'
import _ from 'lodash'

import FnButton from './FnButton'

const Resource = ({item, qty, profit, sellableQtys, fn}) => {
  const buttonList = sellableQtys.map((qty, i) => {
    return <FnButton key={i} item={item} action={'Sell'} fn={fn} qty={qty} />
  })

  return (
    <div className='grid-x grid-margin-x align-middle'>
      <div className='cell auto'>
        <div className='grid-y'>
          <h3 className='cell'>{_.capitalize(`${item}s`)}: {qty}</h3>
          <p className='cell'>Profit: {profit}</p>
        </div>
      </div>
      { buttonList }
    </div>
  )

}

export default Resource
