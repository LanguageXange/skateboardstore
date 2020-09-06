import React from "react";
import { Route } from "react-router-dom";
import CategoryPage from "../category/category.component";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => {
  console.log(match, "in shop component");
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;

// DEBUG: WHEN I TYPE /shop/skateboard in the console.log it doesn't show up!!??

// move the state to redux
// switch to functional component
// move ollections.map into its own child component so that we can have different categories
// url will be localhost:3000/shop/:category

// build a new category page
// dynamically render the category page
// e.g show the longboard but not other stuff
