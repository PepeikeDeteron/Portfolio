import React from 'react'

const Card = (props) => {
  const { name, icon } = props

  return (
    <div className="card">
      <p className="card_name">{name}</p>
      <p className="card_icon">{icon}</p>
    </div>
  )
}

export default Card