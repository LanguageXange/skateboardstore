import React from "react";
import Collection from "../../components/collection/collection.component";
import shopCollectionSelector from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherProps }) => (
      <Collection key={id} {...otherProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: shopCollectionSelector,
});

export default connect(mapStateToProps)(ShopPage);

// move the state to redux
// switch to functional component
