import React from "react";
// FIX THIS FILE - SOMETHING IS WRONG maybe mapStateToProps is not working properly!!!
// https://learn.co/lessons/react-router-params
import "./category.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { cateCollectionSelector } from "../../redux/shop/shop.selectors.js";
import { connect } from "react-redux";
const CategoryPage = ({ cateCollection }) => {
  console.log("cateCollection is undefined");

  const { title, items } = cateCollection;
  return (
    <div className="category-page">
      <h2 className="title"> {title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  cateCollection: cateCollectionSelector(ownProps.match.params.categoryId)(
    state
  ),
});

//state is the reducer state
//ownpros = props of hte component that are wrapping in the connect

export default connect(mapStateToProps)(CategoryPage);

// here we have access to match from Route
// mapStateToProps is an example of currying
