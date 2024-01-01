"use client"

import React, { useEffect, useState } from 'react'

import { useInView} from 'react-intersection-observer'
import Image from 'next/image'
import { getProducts } from '@/app/_productsActions'
import { useSearchParams } from 'next/navigation'

let page = 2

const InfinitScroll = ({totalPages}) => {
  
  const searchParams = useSearchParams();
  const { ref, inView} = useInView()
  const [data, setData] = useState([])


  const limit = 6
  const query = searchParams?.get("query") || ""
  const category = searchParams?.get("category") || ""
  const brand = searchParams?.get("brand") || ""
  const sort = searchParams?.get("sort") || ""


  useEffect(() => {
    if (inView) {
      getProducts( page,
        limit,
        query,
        category,
        brand,
        sort)
        .then((res) => {
          console.log(res, "oups");
          setData([...data, ...res.products])
          page++
        })

    }
  }, [inView])



  return (
    <>
      <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {data.map((p,i) => (  
              <li key={i} className="flex justify-center">
                <div className="w-[400px] h-[400px] bg-pink-800">{ p.name}</div>
              </li>
            )
          )}
          </ul>
      {page-1 < totalPages &&
     
    <div className='flex justify-center pb-28' ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain "
        />
      </div>
     }
      
      
    </>
  )
}

export default InfinitScroll