import React from "react";
import "./collection.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

// items is an array of object in the data
const Collection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title"> {title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4) // only wants the first 4 items
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default Collection;

// Performance concern here if the array is really large items.filter.map function calls whenever Colleciton component renders
// Notice here we use another destructuring and spreading the props

// in Cart Item Reducer lesson, refactor the code to pass in entire item to CollectionItem component
