"use client"
import { useCartStore } from '@/store/cart';
import React from 'react'

const CartTotalPrice = () => {

    const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <div>{totalPrice}</div>
  )
}

export default CartTotalPrice