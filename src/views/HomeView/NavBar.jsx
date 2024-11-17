import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">CTC</div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><a href="">Home</a></li>
        <li><a href="hangman">hangman</a></li>
        <li><a href="rps">Rock, Paper, Scissors</a></li>
        <li><a href="ttl">Two Truths and a Lie</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
