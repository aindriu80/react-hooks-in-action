import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
// import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa'
// import BookablesPage from './Bookables/BookablesPage'
// import BookingsPage from './Bookings/BookingsPage'
// import UsersPage from './Users/UsersPage'
// import UserPicker from './Users/UsersPicker'
import Nav from './Nav/Nav'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  )
}

export default App
