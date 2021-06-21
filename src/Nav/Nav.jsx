import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import '../App.css'
import './Nav.module.css'
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa'
import BookablesPage from '../Bookables/BookablesPage'
import BookingsPage from '../Bookings/BookingsPage'
import UsersPage from '../Users/UsersPage'
import UserPicker from '../Users/UsersPicker'
function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/bookings" className="btn btn-header">
                <FaCalendarAlt />
                <span>Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/bookables" className="btn btn-header">
                <FaUsers />
                <span>Bookables</span>
              </Link>
            </li>
            <li>
              <Link to="/users" className="btn btn-header">
                <FaUsers />
                <span>Users</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/bookables" element={<BookablesPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  )
}

export default Header
