'use client'

import { useCartStore } from "@/store/cart"
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";


const CartIcon = () => {

  const cart = useCartStore((state) => state.cart)

  // hydrate persisted store after on mount
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, [])


  return (
    <div className="relative h-[35px] w-[35px]">
        
        <Link href={"/cart"} >
      <ShoppingBasket strokeWidth={1} size={35} className="absolute"/>
        {cart.length > 0 && (
          <div className="absolute top-0 flex items-center justify-center w-5 h-5 text-xl bg-stone-900rounded-full -right-1"></div>
          )}
    </Link>
          </div>
  )
}

export default CartIcon