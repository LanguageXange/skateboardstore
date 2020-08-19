import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-up/sign-in-up.component";
import { auth } from "./firebase/firebase.utils";

// dummy page for route practice
const Skateboard = () => <div>Skateboard...</div>;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  // we don't want to remount the component
  // we just want the app to know that authentication state changes
  // onAuthStateChanged is a firebase method
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
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

export default App;
// only the HomePage, ShopPage component has access to that specific Route props
// place the Header Component outside of the Switch! so it will appear across the pages!
