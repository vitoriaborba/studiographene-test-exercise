import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";
import './Navigation.css'

function Navigation() {
  let state = {
    isOpen: false
  };
  const handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link smooth to="#home">
        </Link>
        <button
          type="button"
          className="nav-btn"
          onClick={handleToggle}
        ><FaAlignRight className="nav-icon" />
        </button>
      </div>
      <ul className={state.isOpen ? "nav-links show-nav" : "nav-links"}>
      <li>
          <Link smooth to="#home">Home</Link>
        </li>
        <li>
          <Link smooth to="#community">Community</Link>
        </li>
        <li>
          <Link smooth to="#location">Location</Link>
        </li>
        <li>
          <Link smooth to="#menu">Menu</Link>
        </li>
        <li>
          <Link smooth to="#recipes">Recipes</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navigation