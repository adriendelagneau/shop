import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const existingItem = get().cart.find((cartItem) => cartItem._id === item._id);

        if (existingItem) {
          // If the item is already in the cart, increase its quantity
          set({
            cart: get().cart.map((cartItem) =>
              cartItem._id === item._id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          });
        } else {
          // If the item is not in the cart, add it with quantity 1
          set({ cart: [...get().cart, { ...item, quantity: 1 }] })
        }
      },

      removeFromCart: (itemId) =>
        set({ cart: get().cart.filter((item) => item._id !== itemId) }),
      
      increaseQuantity: (itemId) =>
        set({
          cart: get().cart.map((item) =>
            item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }),

      decreaseQuantity: (itemId) =>
        set({
          cart: get().cart
            .map((item) =>
              item._id === itemId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ).filter((item) => item.quantity != 0),
        }),

      clearCart: () => set({ cart: [] }),

      getTotalQuantity: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),

      getTotalPrice: () =>
        get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: 'cart-storage',
      skipHydration: true,
    }
  )
);
