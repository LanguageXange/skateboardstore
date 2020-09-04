import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import sectionsSelector from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="navbar-menu">
    {sections.map(({ id, ...allOtherProps }) => (
      <MenuItem key={id} {...allOtherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector,
});
// you can also write like this w/o createstructuredSelector
// const mapStateToProps = (state) => ({
//   sections: sectionsSelector(state),
// });

export default connect(mapStateToProps)(Directory);
// spread the props instead of doing it verbosely
// previously directory component contains state, but i've moved it to redux
// refactor this component to a functional component
