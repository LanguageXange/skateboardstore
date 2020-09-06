import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreviewSelector from "../../redux/shop/shop.selectors";

import Collection from "../collection/collection.component";
import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <Collection key={id} {...otherProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: CollectionPreviewSelector,
});
export default connect(mapStateToProps)(CollectionOverview);
