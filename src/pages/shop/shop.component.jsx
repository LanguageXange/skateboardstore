import React, { Component } from "react";
import { Route } from "react-router-dom";
import CategoryPage from "../category/category.component";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import { firestore, convertSnapShotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollection } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewSpinner = WithSpinner(CollectionOverview);
const CategoryPageSpinner = WithSpinner(CategoryPage);

class ShopPage extends Component {
  // if we only need state , we don't have to write constructor super
  // under the hood, if react sees the class component and state, it'll pull constructor for us
  // short hand way
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    // destructure updatecollection from the mapDispatchToProps

    // using promise pattern
    // instead of doing onSnapshot, use get then
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionMap = convertSnapShotToMap(snapshot);
      updateCollection(collectionMap);
      this.setState({ loading: false });
    });
    // colletions initial state is null defined in shop.reducer.js
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     console.log(snapshot, "snap ");
    //     const collectionMap = convertSnapShotToMap(snapshot);
    //     console.log(collectionMap, "collectionMap after reduce");
    //     updateCollection(collectionMap);
    //     this.setState({ loading: false });
    //   }
    // );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverviewSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CategoryPageSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collection) => dispatch(updateCollection(collection)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

// TODO: DEBUG- WHEN I TYPE /shop/skateboard in the console.log it doesn't show up!!??

// move the state to redux
// switch to functional component
// move ollections.map into its own child component so that we can have different categories
// url will be localhost:3000/shop/:category

// build a new category page
// dynamically render the category page
// e.g show the longboard but not other stuff
// in App.js remember to remove 'exact' for  <Route path="/shop" component={ShopPage} />

// Migrate data to firebase
// turn this component from functional to class component

//BEFORE SPINNER
//<Route exact path={match.path} component={CollectionOverview} />
//<Route path={`${match.path}/:categoryId`} component={CategoryPage} />
