import React from 'react';
import '../styling/header.css';
import logo from '../images/Logo.png';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <h2 onClick={()=>document.location="/"}><img src={logo} alt="SoundSurff logo" /></h2>
          <li><a href="/" id="home-link">Home</a></li>
          <li><a href="/categories" id="categories-link">Categories</a></li>
          <li>
            <form>
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button id="login-button" onClick={()=>document.location="/login"}>Log In</button>
        <button id="signup-button" onClick={()=>document.location="/signup"} >Sign Up</button>
        <button id="creator-button" onClick={()=>document.location="/creator"}>Creator</button>
      </div>
    </header>
  );
}

export default Header;
