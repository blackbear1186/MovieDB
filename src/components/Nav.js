import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h3 className="nav-heading">Movies</h3>
        <ul className='navbar-link'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
            <li>
              <Link to="/top-rated">Top Rated</Link>
            </li>
        </ul>
        
      </div>
    </nav>

  );
};

export default Nav;
