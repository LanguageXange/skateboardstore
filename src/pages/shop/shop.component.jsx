import React from "react";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => (
  <div className="shop-page">
    <CollectionOverview />
  </div>
);

export default ShopPage;

// move the state to redux
// switch to functional component
// move ollections.map into its own child component so that we can have different categories
// url will be localhost:3000/shop/:category
