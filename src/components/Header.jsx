import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="nav-logo">Sri Madhav Gannina</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#experience">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="nav-avail">
        <span className="avail-dot"></span>
        Available for Opportunities
      </div>
    </header>
  );
};

export default Header;
