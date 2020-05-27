import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper" style={{backgroundColor: 'grey'}}>
            <a href="/" className="col s5 brand-logo center black-text" style={{fontFamily: 'Arial', fontWeight: 'bold'}}>RENTAL SHIFTERS</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 15}} href="/dashboard">Home</a></li>
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 15}} href="/selection">Selection</a></li>
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 15}} href="/location">Map</a></li>
              <button
                  style={{
                    width: "100px",
                    letterSpacing: "1.5px",
                    borderRadius: 3,
                    marginRight: 30
                  }}
                  onClick={this.onLogoutClick}
                  className="btn btn-small waves-effect waves-light hoverable red accent-3"
                >
                  LogOut
              </button>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
