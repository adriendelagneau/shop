"use client"
import { useCartStore } from '@/store/cart';
import { Trash2 } from 'lucide-react';
import React from 'react'

const DeleteCartIemButton = ({id}) => {

  const removeFromCart = useCartStore((state) => state.removeFromCart);


  const handleremoveFromCart = () => {
    removeFromCart(id)
}

  return (
    <button onClick={handleremoveFromCart}>
      <Trash2/>
    </button>
  )
}

export default DeleteCartIemButton