"use client"
import { useCartStore } from '@/store/cart';
import { Plus } from 'lucide-react';
import React from 'react'

const IncreaseCartButton = ({ id }) => {
    
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  
    const handleIncreaseCart = () => {
        increaseQuantity(id)
    }
  
    return (
        <button onClick={handleIncreaseCart}>
            <Plus />
    </button>
  )
}

export default IncreaseCartButton