import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

// https://learn.co/lessons/react-router-params
import "./category.styles.scss";

import { CollectionSelector } from "../../redux/shop/shop.selectors";

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="category-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: CollectionSelector(ownProps.match.params.categoryId)(state),
});

//state is the reducer state
//ownpros = props of hte component that are wrapping in the connect

export default connect(mapStateToProps)(CategoryPage);

// here we have access to match from Route
// mapStateToProps is an example of currying
