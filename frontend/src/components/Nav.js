import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Nav = () => {
  return (
    <div >
           <nav>
          <ul className='container'>
            <li className='list'>
              <Link to="/">Home</Link>
            </li>
            <li className='list'>
              <Link to="/register">Register</Link>
            </li>
            <li className='list'>
              <Link to="/login">Login</Link>
            </li>
            <li className='list'>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Nav