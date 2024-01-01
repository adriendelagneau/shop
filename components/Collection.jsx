"use client"

import Link from "next/link"



const Collection = ({
  data,
 
}) => {
  
 

  return (
    <>
  
      <div className="flex flex-col items-center gap-10 min-h-screen">
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {data.map((product, i) => {
         

            return (
              <li key={i} className="flex justify-center">
                <div className="w-[400px] h-[400px] bg-pink-800">{product.name}</div>
                <button><Link href={`/product/${product._id}`} className="w-full h-full">voir</Link></button>
              </li>
            )
          })}
          </ul>
          </div>
  
    
  </>
  )
}

export default Collection