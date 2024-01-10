"use client"
import React, { useState } from 'react'
import { useCartStore } from "@/store/cart"
import { X } from 'lucide-react';

const CartCard = ({ productDetails }) => {

    const setQuantity = useCartStore((state) => state.setQuantity);
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const [qty, setQty] = useState(productDetails.quantity)

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQty(newQuantity);

        setQuantity(productDetails._id, newQuantity)
    };

    return (
        <li className="flex justify-between w-full py-6">
            <div className='flex justify-between'>
                <div className="w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                    <img src={productDetails.image[0]} />
                </div>
                <div >
                    <div className="ml-4 text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">{productDetails.name}</a>
                        </h3>
                    <p className="mt-1 text-sm text-gray-500">beats</p>
                        <p className="">{productDetails.quantity * productDetails.price} €</p>
                    </div>
                </div>
            </div>
            <select value={qty} onChange={handleQuantityChange} className='h-10 border outline-none bg-inherit'>

                {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1} className='border bg-inherit'>
                        {num + 1}
                    </option>
                ))}
            </select>
            <div>
            <X color='#6b7280' onClick={(() => removeFromCart(productDetails._id))} className='cursor-pointer'/>
            </div>

        </li>
    )
}

export default CartCard