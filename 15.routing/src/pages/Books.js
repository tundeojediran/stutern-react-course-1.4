import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { books } from '../data'

const Books = () => {
  return (
    <div className='container'>

      <div className="title">
        <h2>Books I have Read</h2>
      </div>

      <ul>
        {books.map((book) => {
          return <li key={book.id}>
            <NavLink to={`/books/${book.id}`}>{book.name}</NavLink>
          </li>
        })}
      </ul>

      <div className='book-details-container' >
        <Outlet />
      </div>

    </div>
  )
}

export default Books