import React from 'react'
import "./Card.css"

function Card({word}) {
  return (
    <div className="card">
        <div className="flex-vertical content">
            <h3>{word}</h3>
            <p>{word}</p>
        </div>
        <div className="flex-horizontal">
            <button>Gia Lai</button>
        </div>
    </div>
  )
}

export default Card