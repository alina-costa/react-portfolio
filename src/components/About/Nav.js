import React from "react";

function Nav({ setCurrentPage }) {
  return (
    <header>
      <h1>Alina Costa Portfolio</h1>
      <ul className="navBar">
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
      <h2>Projects:</h2>
        <a href="https://gametime-g6.herokuapp.com/" target="_blank" rel="noreferrer">
            Game Time 
          </a>
    </header>
  );
}

export default Nav;
