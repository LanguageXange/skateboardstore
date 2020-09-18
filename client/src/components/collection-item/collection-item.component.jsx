import React from "react";
import { connect } from "react-redux";
import { AddItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      ></div>
      <div className="collection-footer">
        <h2 className="name">{name}</h2>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
