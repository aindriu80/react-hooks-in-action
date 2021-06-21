import React from 'react'

import { bookables } from '../../static.json'

import classes from './BookablesPage.module.css'

export default function BookablesList() {
  const group = 'Rooms'

  const bookablesInGroup = bookables.filter((b) => b.group === group)

  let bookableIndex = 1

  function changeBookable(selectedIndex) {
    bookableIndex = selectedIndex
    console.log(selectedIndex)
  }

  return (
    // <ul className="bookables item-list-nav">
    <ul className={classes.li}>
      {bookablesInGroup.map((b, i) => (
        <li
          className={classes.li}
          key={b.d}
          className={i === bookableIndex ? 'selected' : null}>
          <button className={classes.btn} onClick={() => changeBookable(i)}>
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  )
}
