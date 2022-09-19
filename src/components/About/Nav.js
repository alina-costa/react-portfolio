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
    </header>
  );
}

export default Nav;
