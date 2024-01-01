"use client"
import { useCartStore } from '@/store/cart';
import { Minus } from 'lucide-react';
import React from 'react'

const DecreaseCartButton = ({ id }) => {
    
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  
    const handleDecreaseCart = () => {
        decreaseQuantity(id)
    }
  
    return (
        <button onClick={handleDecreaseCart}>
            <Minus />
    </button>
  )
}

export default DecreaseCartButton