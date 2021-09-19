import React from 'react'
import ReactStars from 'react-stars'

const Card = (props) => {
  const { name, icon, value, caption } = props

  return (
    <div className="card">
      <p className="card_name">{name}</p>
      <p className="card_icon">{icon}</p>
      <p className="card_star">
        <ReactStars
          count={5}
          value={value}
          size={16}
          color='#fff'
          edit={false}
        />
      </p>
      <aside className="card_caption">{caption}</aside>
    </div>
  )
}

export default Card