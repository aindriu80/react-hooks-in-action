import React from 'react'
import classes from './BookablesPage.module.css'
import { FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BookablesList from './BookablesList'

function BookablesPage() {
  return (
    <main className="bookables-page">
      <p>Bookables Page!</p>
      <BookablesList />
    </main>
  )
}
export default BookablesPage
