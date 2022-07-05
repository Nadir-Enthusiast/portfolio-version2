import "./Navbar.css"
import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-container">
            <a href="#intro">About me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact me</a>
        </div>
    </div>
  )
}

export default Navbar
