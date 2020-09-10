import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import { setCurrentUser } from "./redux/user/user.action";
// adding action creator function , which simply returns the action object
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import ContactPage from "./pages/contact/contact.component";
import SignInAndSignUpPage from "./pages/sign-in-up/sign-in-up.component";
import Header from "./components/header/header.component";
import {
  auth,
  createUserProfile,
  addCollectionAndDocument,
} from "./firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { CurrentUserSelector } from "./redux/user/user.selector";
import { CollectionPreviewSelector } from "./redux/shop/shop.selectors";

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
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // if user signs out userAuth will be null
        setCurrentUser(userAuth);
        // we only want to return title and items from the collectionsArray
        // we are moving data from local machine to firebase
        // only call it once and then delete the addCollectionAndDocument otherwise you will see a lot of items in collections

        // addCollectionAndDocument(
        //   "collections",
        //   collectionsArray.map(({ title, items }) => ({ title, items }))
        // );
      }
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
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: CurrentUserSelector,
  collectionsArray: CollectionPreviewSelector,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// only the HomePage, ShopPage component has access to that specific Route props
// place the Header Component outside of the Switch! so it will appear across the pages!
// redirect users once they sign in, so we need the state, & redirect fromo react-router-dom
// change to route from component to render

// DEBUG SUCCESS: remove exact for the shopPage otherwise /shop/:categoryId will NEVER BE RENDERED
