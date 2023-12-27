import { getProducts } from '@/app/_productsActions'
import React from 'react'

const ProductPage = async () => {

    const products = await getProducts()
    console.log(products)
    return (
      <div className='h-[200vh]'>
    <div>ProductPage</div>
            {products?.map((p, i) => (
                <div key={i}>{p.name}</div>
      ))}
        </div>
  )
}

export default ProductPage