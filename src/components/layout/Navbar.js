import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar=()=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <NavLink to='/' className="navbar-brand" >
        React-CRUD
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to='/' exact className="nav-link " aria-current="page" >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/about' exact className="nav-link" >
             About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/contact' exact className="nav-link" >
             Contact
            </NavLink>
          </li>
        </ul>

      </div>
      <Link to='/addUser' className='btn btn-primary border d-flex align-items-center'><i className="las la-user me-2" style={{fontSize:'30px'}}></i>Add User</Link>
    </div>
  </nav>
  )
}

export default Navbar