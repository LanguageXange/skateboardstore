import React from "react";
import { connect } from "react-redux";
// connect is a HOC
import { Link } from "react-router-dom";
import { ReactComponent as MyLogo } from "../../assets/skate.svg";
// this is a special syntax in React for importing SVG!!
// cool!
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

// previously we get currentUser from App.js but now we are getting it from redux
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <MyLogo className="logo" />
      </Link>
      <div className="options">
        <Link className="option " to="/shop">
          Shop
        </Link>
        <Link className="option " to="/contact">
          Contact
        </Link>

        {currentUser ? (
          <div className="option " onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

// state from  root-reducer, and from user.reducer.js we are getting the currentUser

const mapUserStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapUserStateToProps)(Header);
