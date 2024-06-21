import React from 'react'
import logo from './logo.svg';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="" />
        <li>Articles</li>
        <li>Books</li>
        <li>Collection</li>
        <li>Custom solutions</li>
        <input type="button" value="search for articles and books" />
        <button>Log in</button>
      </nav>
    </header>
  )
}

export default Navbar