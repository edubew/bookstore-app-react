import React from 'react';
import { Link } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';
import './Books/books.css';

const Navbar = () => (
  <header>
    <Link className="logo" to="/">Bookstore CMS</Link>

    <nav>
      <Link className="nav__item" to="/">BOOKS</Link>
      <Link className="nav__item" to="/categories">CATEGORIES</Link>
      <GoPerson className="login" />
    </nav>
  </header>
);

export default Navbar;
