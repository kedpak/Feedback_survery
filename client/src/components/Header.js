import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  // Header of application.

  // Checks user login status.
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google Account</a>
          </li>
        )
      default:
        return <li><a href="/api/logout">Logout</a></li>
    }
  }
  render() {
    return (
      <nav>
         <div className="nav-wrapper">
           <a className="left brand-logo">Feedback Survey</a>
           <ul id="nav-mobile" className="right">
             {this.renderContent()}
           </ul>
         </div>
      </nav>
    )
  }
}

// Calls entire state object out of redux store
function mapStateToProps({ auth }) {
  return { auth };
}
// Connects Header component to the Store.
export default connect(mapStateToProps)(Header);
