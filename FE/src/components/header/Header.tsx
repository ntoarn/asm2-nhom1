import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <header>
      <Link to="/">
        <img src="https://shop.mixigaming.com/wp-content/uploads/2019/06/logo-mixi-t%C3%A9t.png" alt="" width={150} />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
    </div>
  )
}

export default Header
