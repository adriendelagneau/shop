decreaseQuantity: (itemId) => {
  set({
    cart: get().cart.map((item) =>
      item._id === itemId
        ? item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item.quantity === 1
            ? /* handle case where quantity is 1 */
                // remove item
        : item
    ),
  });
},
