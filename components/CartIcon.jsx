'use client'

import { useBearStore  } from "@/store/cart"

import { useEffect } from "react";



const CartIcon = () => {

  const bears = useBearStore((state) => state.bears)
   const addABear = useBearStore((state) => state.addABear)

 // hydrate persisted store after on mount
 useEffect(() => {
  useBearStore.persist.rehydrate();
}, [])


  return (
    <>
    <div onClick={addABear}>increase bears</div>
      <div>{ bears }</div>
    </>
  )
}

export default CartIcon