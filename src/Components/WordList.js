import React from 'react'
import Card from './Card'

function WordList({data}) {
  return(
    <div>
        <h1>Browse words/phrases</h1>
        {data.map(word => <Card id={word} word={word}/>)}
    </div>
  )
}

export default WordList