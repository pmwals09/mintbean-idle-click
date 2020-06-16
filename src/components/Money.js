import React from 'react'

const Money = ({money}) => {
  return (
    <div>
      <h3>Funds: <span>{money.toFixed(2)}</span></h3>
    </div>
  )
}

export default Money
