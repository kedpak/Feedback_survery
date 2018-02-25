import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  // Header of application.

  // Checks user login status.
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        // If user is logged out display this.
        return (
          <li>
            <a href="/auth/google">Login With Google Account</a>
          </li>
        )
      default:
        // If user is logged in.
        return [
          <li key="1"><Payments /></li>,
          <li key="2" style={{margin: '0 10px'}}>
            Credits: {this.props.auth.userCredits}
          </li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ]
    }
  }
  render() {
    return (
      <nav style={{'background-color': '#616161'}}>
         <div className="nav-wrapper">
           <Link className="left brand-logo"
              to={this.props.auth ? '/surveys' : '/'}
              >
                Feedback Survey
           </Link>
           <ul id="nav-mobile" className="right">
             {this.renderContent()}
           </ul>
         </div>
      </nav>
    )
  }
}

// Calls entire state object out of redux store.
function mapStateToProps({ auth }) {
  return { auth };
}
// Connects Header component to the Store.
export default connect(mapStateToProps)(Header);
