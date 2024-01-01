"use client"

import { useCartStore } from '@/store/cart';
import React from 'react'

const AddToCartButton = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart);

    const productToZustand = {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image
    }
    

  const handleAddToCart = () => {
    addToCart(productToZustand);
  };

  return (
    <button onClick={handleAddToCart}>
    Add to Cart
  </button>
  )
}

export default AddToCartButton