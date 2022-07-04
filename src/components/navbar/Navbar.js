import "./Navbar.css"
import React from 'react'

function Navbar() {

  const clickNav = (event) => {
    console.log("ok")
  }

  return (
    <div className="navbar">
        <div className="nav-container">
            <a href="#about" onClick={(event) => clickNav(event)}>About me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact me</a>
        </div>
    </div>
  )
}

export default Navbar
