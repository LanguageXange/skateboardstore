const INITIAL_STATE = {
  sections: [
    {
      title: "skateboard",
      imageUrl: "https://i.ibb.co/jkvFJxX/skateboard.jpg",
      id: 1,
      linkUrl: "shop/skateboard",
    },
    {
      title: "longboards",
      imageUrl:
        "https://landyachtz.com/ca/wp-content/uploads/sites/3/2020/03/skateboard_longboard_top_image-1.jpg",
      id: 2,
      linkUrl: "shop/longboard",
    },
    {
      title: "cruisers",
      imageUrl:
        "https://landyachtz.com/ca/wp-content/uploads/sites/3/2020/04/cruiser_cateogory_img-1.jpg",
      id: 3,
      linkUrl: "shop/cruiser",
    },
    {
      title: "downhill",
      imageUrl:
        "https://landyachtz.com/ca/wp-content/uploads/sites/3/2020/04/2bear-trucks-landyachtz-logo-skateboarding.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/downhill",
    },

    {
      title: "outfit",
      imageUrl:
        "https://landyachtz.com/ca/wp-content/uploads/sites/3/2020/04/new_tees-1.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/outfit",
    },
  ],
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default DirectoryReducer;
