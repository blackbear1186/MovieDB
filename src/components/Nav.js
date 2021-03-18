import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h3 className="nav-heading">
          <Link className='nav-link' to='/'>Movies</Link>
        </h3>
        <ul className='navbar-link'>
            <li>
              <Link className='link' to="/">Home</Link>
            </li>
            <li>
              <Link className='link'  to="/popular">Popular</Link>
            </li>
            <li>
              <Link className='link'  to="/top-rated">Top Rated</Link>
            </li>
        </ul>
        
      </div>
    </nav>

  );
};

export default Nav;
