import React, { useState } from 'react'
import { bookables } from '../../static.json'
import classes from './BookablesPage.module.css'
import { FaArrowRight } from 'react-icons/fa'

export default function BookablesList() {
  const group = 'Rooms'
  const bookablesInGroup = bookables.filter((b) => b.group === group)
  const [bookableIndex, setBookableIndex] = useState(1)

  function nextBookable() {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length)
  }

  return (
    <div>
      <ul className={classes.li}>
        {bookablesInGroup.map((b, i) => (
          <li
            className={classes.li}
            key={b.id}
            className={i === bookableIndex ? 'selected' : null}>
            <button className="btn" onClick={() => setBookableIndex(i)}>
              {b.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        <button className="btn" onClick={nextBookable} autoFocus>
          <FaArrowRight />
          <span>Next</span>
        </button>
      </p>
    </div>
  )
}
