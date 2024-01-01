"use client"
import { useCartStore } from '@/store/cart';
import React from 'react'

const CartTotalPrice = () => {

    const totalPrice = useCartStore((state) => state.getTotalPrice());
console.log(totalPrice)
  return (
    <div>Total price: {totalPrice}</div>
  )
}

export default CartTotalPrice