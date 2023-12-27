'use client'

import { useCartStore } from "@/store/cart"
import { useEffect } from "react";


const CartIcon = () => {

  const cart = useCartStore((state) => state.cart)

  // hydrate persisted store after on mount
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, [])


  return (
    <>
      <div>cart</div>
    </>
  )
}

export default CartIcon