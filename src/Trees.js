import React from 'react'

import FnButton from './FnButton'

const Trees = ({trees, buyTrees}) => {
  return (
    <div className='grid-x grid-margin-x align-middle'>
      <div className='cell auto'>
        <div className='grid-y'>
          <h3 className='cell'>Trees: <span>{trees}</span></h3>
          <p className='cell'>Cost: $7.50/ea</p>
        </div>
      </div>
      <FnButton item={'trees'} action={'Buy'} fn={buyTrees} qty={1} />
      <FnButton item={'trees'} action={'Buy'} fn={buyTrees} qty={5} />
      <FnButton item={'trees'} action={'Buy'} fn={buyTrees} qty={10} />
      <FnButton item={'trees'} action={'Buy'} fn={buyTrees} qty={20} />
    </div>
  )
}

export default Trees
