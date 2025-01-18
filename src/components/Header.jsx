import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="announcement">
        🎉 oTTomator is Hosting a Hackathon for the Live Agent Studio! Register 🎉
      </div>
      <nav>
        <div className="logo">
          <img src="/logo.svg" alt="Live Agent Studio" />
          <span>Live Agent Studio</span>
        </div>
        <div className="nav-links">
          <a href="#">oTTomator</a>
          <a href="#">About</a>
          <a href="#">Developer Guide</a>
          <a href="#">Hackathon</a>
          <a href="#">Submit Agent</a>
          <button className="sign-in">Sign In</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
