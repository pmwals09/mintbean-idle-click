import React from 'react'

const Apples = ({apples, setApples}) => {
  return (
    <div>
      <h3>Apples: <span>{apples}</span></h3>
      <p>Apples to sell: 1</p> { /* $0.80/apple */ }
      <p>Apples to sell: 10</p> { /* $0.80/apple */ }
      <p>Apples to sell: 50</p> { /* $0.80/apple */ }
      <p>Apples to sell: 100</p> { /* $0.80/apple */ }
    </div>
  )
}

export default Apples
