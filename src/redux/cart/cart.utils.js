export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseItem = (cartItems, itemToDecrease) => {
  const existItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );
  // think about the case when quan is 1 decreasing essentially means remove item from cart!
  if (existItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrease.id);
  }
  return cartItems.map((item) =>
    item.id === itemToDecrease.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
