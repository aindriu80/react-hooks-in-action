import React, { useState } from 'react'
import { bookables } from '../../static.json'
import classes from './BookablesPage.module.css'
import { FaArrowRight } from 'react-icons/fa'

export default function BookablesList() {
  const [group, setGroup] = useState('Kit')
  const bookablesInGroup = bookables.filter((b) => b.group === group)
  const [bookableIndex, setBookableIndex] = useState(0)
  // const groups = [...new Set(bookables.map((b) => b.group))]

  function nextBookable() {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length)
  }
  function getUniqueValues(array, property) {
    const propValues = array.map((element) => element[property])
    const uniqueValues = new Set(propValues)
    const uniqueValuesArray = [...uniqueValues]
    return uniqueValuesArray
  }
  const groups = getUniqueValues(bookables, 'group')

  return (
    <div>
      <select value={group} onChange={(e) => setGroup(e.target.value)}>
        {groups.map((g) => (
          <option value={g} key={g}>
            {g}
          </option>
        ))}
      </select>

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
