import React from 'react'
import "./Pagination.css"

function Pagination({page, goToNextPage, goToPrevPage}) {
  return (
    <div className='pagination'>
        {goToPrevPage ? <button onClick={goToPrevPage}>Prev</button> : <button disabled>Prev</button>}
        <span>{page}</span>
        {goToNextPage ? <button onClick={goToNextPage}>Next</button> : <button disabled>Next</button>}
    </div>
  )
}

export default Pagination