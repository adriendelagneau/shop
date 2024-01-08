"use client"

import Link from "next/link"
import ProductCard from "./ProductCard"



const Collection = ({
  data,
 
}) => {
  
 

  return (
    <>
  
      <div className="min-h-screen">
        <ul className="grid justify-center grid-cols-1 mx-auto mt-10 mb-5 w-fit lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14">
          {data.map((product, i) => {
         

            return (
              <li key={i} className="">
                <ProductCard productData={product} />
              </li>
            )
          })}
          </ul>
          </div>
  
    
  </>
  )
}

export default Collection