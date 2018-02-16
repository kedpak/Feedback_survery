import React, { Component } from 'react';

class Header extends Component {
  // Header of application. 
  render() {
    return (
      <nav>
         <div className="nav-wrapper">
           <a className="left brand-logo">Feedback Survey</a>
           <ul id="nav-mobile" className="right">
             <li><a>Login</a></li>
             <li><a href="badges.html">Components</a></li>
             <li><a href="collapsible.html">JavaScript</a></li>
           </ul>
         </div>
      </nav>
    )
  }
}

export default Header;
