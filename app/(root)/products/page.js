import { getProducts } from '@/app/_productsActions'
import SelectProducts from '@/components/SelectProducts';
import React from 'react'

const ProductPage = async ({searchParams}) => {



  const data = await getProducts(
    searchParams?.page || 1,
    searchParams?.limit || 12,
    searchParams?.query || "",
    searchParams?.category || "",
    searchParams?.brand || "",
    searchParams?.sort || ""
  );

    return (
      <div >
        <div>ProductPage</div>
        <div className='w-full flex gap-14 flex-wrap'>

            {data?.products.map((p, i) => (
              <div key={i} className='w-[400px] h-[400px] bg-red-500'>{p.name}</div>
              ))}
        </div>
        
<SelectProducts searchParams={searchParams}/>
        </div>
  )
}

export default ProductPage