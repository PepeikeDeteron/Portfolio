import React from 'react'
import Card from '../components/Card'

const CardContainer = (props) => {
  const { skills } = props

  return (
    <div className="card_list">
      {skills.length > 0 &&
        skills.map((skill) => (
          <Card
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
    </div>
  )
}

export default CardContainer