import React, { useState } from "react";
import "./Navbar.css";
import bman from '../images/bman.png'
 

function Navbar() {
  const [isOpen, setIsOpen] =  useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/" className="logo-link">
        <img src={bman} alt="bman-logo" className="main-logo"></img>
        </a>
      </div>
      <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
        <li>
          <a href="#projects" className="nav-item">Portfolio</a>
        </li>
        <li>
          <a href="/clients" className="nav-item">Clients</a>
        </li>
        <li>
          <a href="/contact" className="nav-item">Contact</a>
        </li>
        <div className="close-menu" onClick={() => setIsOpen(false)}>
          ✖
        </div>
      </ul>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;