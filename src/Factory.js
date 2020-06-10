import React from 'react'
import _ from 'lodash'

import FnButton from './FnButton'

const Factory = ({item, qty, cost, buyableQty, fn}) => {
  const buttonList = buyableQty.map((qty, i) => {
    return <FnButton key={i} item={item} action={'Buy'} fn={fn} qty={qty} />
  })

  return (
    <div className='grid-x grid-margin-x align-middle'>
      <div className='cell auto'>
        <div className='grid-y'>
          <h3 className='cell'>{_.capitalize(`${item}s`)}: {qty}</h3>
          <p className='cell'>Cost: {cost}</p>
        </div>
      </div>
      { buttonList }
    </div>
  )
}

export default Factory
