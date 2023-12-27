import { create } from 'zustand'
import { persist} from 'zustand/middleware'



export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        const existingItem = get().cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
          // If the item is already in the cart, increase its quantity
          set({
            cart: get().cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          });
        } else {
          // If the item is not in the cart, add it with quantity 1
          set({ cart: [...get().cart, { ...item, quantity: 1 }] });
        }
      },
      removeFromCart: (itemId) =>
        set({ cart: get().cart.filter((item) => item.id !== itemId) }),
      increaseQuantity: (itemId) =>
        set({
          cart: get().cart.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }),
      decreaseQuantity: (itemId) =>
        set({
          cart: get().cart.map((item) =>
            item.id === itemId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage',
      skipHydration: true,
    }
  )
);
