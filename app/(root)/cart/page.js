"use client"

import React, { useEffect } from 'react'
import { useCartStore } from "@/store/cart"
import IncreaseCartButton from '@/components/button/IncreaseCartButton'
import DecreaseCartButton from '@/components/button/DecreaseCartButton'
import DeleteCartIemButton from '@/components/button/DeleteCartIemButton'
import CartTotalPrice from '@/components/CartTotalPrice'


const CartPage = () => {

    const cart = useCartStore((state) => state.cart)
    const getTotalPrice = useCartStore((state) => state.getTotalPrice);

    // hydrate persisted store after on mount
    useEffect(() => {
        useCartStore.persist.rehydrate();
    }, [])

   


    return (
        <>
        <div>{cart.length > 0 ? (
            
            cart.map((p, i) => (
                <div key={i}>
                    <div>
                        <div>{p.name}</div>
                        <div>{p.quantity}</div>
                        <div>Price: { p.price * p.quantity}</div>
                    </div>
                    <div>
                        <DecreaseCartButton id={p._id} />
                        <IncreaseCartButton id={p._id} />
                        <DeleteCartIemButton id={p._id} />
                    </div>
                </div>
            ))
            
            ) : (
                <div>Empty cart</div>
            )}</div>
            <CartTotalPrice />
                </>
    )
}

export default CartPage