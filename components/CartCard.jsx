"use client"
import React, { useState } from 'react'
import { useCartStore } from "@/store/cart"
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
            
                <Link href={`/product/${productDetails._id}`} className='flex justify-between'>
                    
                <div className="overflow-hidden border border-gray-200 rounded-md ">
                    <Image src={productDetails.image[0]} width={80} height={80} alt={`${productDetails.name}` } />
                </div>
                <div >
                    <div className="ml-4 text-base font-medium text-gray-900">
                        <h3>
                            <p>{productDetails.name}</p>
                        </h3>
                    <p className="mt-1 text-sm text-gray-500">beats</p>
                        <p className="">{productDetails.quantity * productDetails.price} €</p>
                    </div>
                </div>
                </Link>
        
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