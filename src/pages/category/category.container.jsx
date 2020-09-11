import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { CollectionLoadingSelector } from "../../redux/shop/shop.selectors.js";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CategoryPage from "./category.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !CollectionLoadingSelector(state),
});

const CategoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoryPage);

export default CategoryContainer;
