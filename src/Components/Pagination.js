import React from 'react'
import "./Pagination.css"

function Pagination({page, goToNextPage, goToPrevPage}) {
  return (
    <div className='pagination'>
        {goToPrevPage ? <button onClick={goToPrevPage}>Trang trước</button> : <button disabled>Trang trước</button>}
        <span>{page}</span>
        {goToNextPage ? <button onClick={goToNextPage}>Trang sau</button> : <button disabled>Trang sau</button>}
    </div>
  )
}

export default Pagination