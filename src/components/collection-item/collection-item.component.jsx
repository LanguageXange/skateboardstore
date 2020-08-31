import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="image"
    ></div>
    <div className="collection-footer">
      <h2 className="name">{name}</h2>
      <span className="price">${price}</span>
    </div>
    <CustomButton inverted>Add to Cart</CustomButton>
  </div>
);

export default CollectionItem;
