"use client"

import React, { useEffect } from 'react'
import { useCartStore } from "@/store/cart"
import CheckoutButton from '@/components/button/CheckoutButton'
import CartCard from '@/components/CartCard'


const CartPage = () => {

    const cart = useCartStore((state) => state.cart)
    const getTotalPrice = useCartStore((state) => state.getTotalPrice);

    // hydrate persisted store after on mount
    useEffect(() => {
        useCartStore.persist.rehydrate();
    }, [])




    return (
        <div className='min-h-[calc(100vh-60px)] max-w-screen-2xl mx-auto mt-12 p-4'>
            <div className='relative flex flex-col w-full xl:flex-row'>

                <div className='grow'>
                    <h2 className='my-12 text-4xl capitalize'>your cart</h2>
                    <ul className='max-w-4xl divide-y divide-gray-200'

                    >{cart.length > 0 ? (

                        cart.map((p, i) => (
                            <CartCard productDetails={p} key={i} />
                        ))

                    ) : (
                        <div>Empty cart</div>
                    )}</ul>

                </div>

                <div className='w-[350px] p-4 xl:my-24 xl:ml-10 bg-zinc-50 mx-auto rounded text-lg flex flex-col gap-8 capitalize xl:sticky xl:top-16 h-[450px]'>
                    <h2 className='my-8 text-4xl capitalize'>order details</h2>
                    <div className='flex justify-between w-full'>
                        <p>subtotal</p>
                        <p>{getTotalPrice()} €</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>shipping fees</p>
                        <p>5 €</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>total order</p>
                        <p> {getTotalPrice()} €</p>
                    </div>


                    <CheckoutButton className="w-full" />
                </div>
            </div>

        </div>
    )
}

export default CartPage