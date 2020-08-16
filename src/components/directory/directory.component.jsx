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
          imageUrl: "https://i.ibb.co/G0TjT0m/longboard.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "cruisers",
          imageUrl: "https://i.ibb.co/0BtwYHP/cruiser.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "downhill",
          imageUrl: "https://i.ibb.co/x5HQSqp/downhill.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },

        {
          title: "outfit",
          imageUrl: "https://i.ibb.co/LRWQ12h/apparel.jpg",
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
