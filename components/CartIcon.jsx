'use client'

import { useCartStore } from "@/store/cart"
import { useEffect } from "react";


const CartIcon = () => {

  const cart = useCartStore((state) => state.cart)

  // hydrate persisted store after on mount
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, [])

console.log(cart)
  return (
    <>
      <div>cart</div>
        {cart.length > 0 && (
      <div className="w-8 h-8 rounded-full bg-red-800 text-xl flex justify-center items-center">{cart.length}</div>
        )}
    </>
  )
}

export default CartIcon