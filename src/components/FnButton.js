import React from 'react'

const FnButton = ({item, action, fn, qty}) => {
  return (
    <div className={`cell auto button ${item} align-middle`} onClick={() => fn(qty)}>
      <p>{action} {qty}</p>
    </div>
  )
}

export default FnButton
