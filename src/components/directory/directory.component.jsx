import React, { Component } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "skateboard",
          imageUrl: "https://i.ibb.co/jkvFJxX/skateboard.jpg",
          id: 1,
          linkUrl: "skateboard",
        },
        {
          title: "longboards",
          imageUrl:
            "https://landyachtz.com/ca/wp-content/uploads/sites/3/2020/03/skateboard_longboard_top_image-1.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "cruisers",
          imageUrl:
            "https://landyachtz.com/ca/wp-content/uploads/sites/3/2020/04/cruiser_cateogory_img-1.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "downhill",
          imageUrl:
            "https://landyachtz.com/ca/wp-content/uploads/sites/3/2020/04/2bear-trucks-landyachtz-logo-skateboarding.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },

        {
          title: "outfit",
          imageUrl:
            "https://landyachtz.com/ca/wp-content/uploads/sites/3/2020/04/new_tees-1.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="navbar-menu">
        {this.state.sections.map(({ id, ...allOtherProps }) => (
          <MenuItem key={id} {...allOtherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
// spread the props instead of doing it verbosely
