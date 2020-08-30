import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
// adding action creator function , which simply returns the action object
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-up/sign-in-up.component";
import { auth, createUserProfile } from "./firebase/firebase.utils";

// dummy page for route practice
const Skateboard = () => <div>Skateboard...</div>;

// add connect & dispatch in app.js so we can remove constructor super and this.state
class App extends React.Component {
  unsubscribeFromAuth = null;
  // we don't want to remount the component
  // we just want the app to know that authentication state changes
  // onAuthStateChanged is a firebase method
  // userAuth is null when users sign out : setting by Firebase i guess
  // Lesson-10 Titled: Storing User Data in App - review , a bit complicated
  // TypeError - onSnapshot of undefined?? => solution delete collection sometimes work? delete users in authentication
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          console.log(this.state);
        });
      } else {
        // if user signs out userAuth will be null
        setCurrentUser(userAuth);
      }

      //console.log(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/skateboard" component={Skateboard} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
// only the HomePage, ShopPage component has access to that specific Route props
// place the Header Component outside of the Switch! so it will appear across the pages!
