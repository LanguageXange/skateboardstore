import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="image"
    ></div>
    <div className="collection-footer"></div>
    <h2 className="name">{name}</h2>
    <span className="price">${price}</span>
  </div>
);

export default CollectionItem;
