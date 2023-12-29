"use client"
import React, { useEffect, useState } from 'react'
import { getProducts } from '@/app/_productsActions' 

import { useInView} from 'react-intersection-observer'
import Image from 'next/image'
import AnimeCard from './AnimeCard'

let currentPage = 2

function LoadMore() {
    const { ref, inView } = useInView();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMorePages, setHasMorePages] = useState(true); // New state variable
  
    useEffect(() => {
      setIsLoading(true);
      if (inView && hasMorePages) {
        getProducts(currentPage, 8)
          .then((res) => {
            if (res.length > 0) {
              setData([...data, ...res]);
              currentPage++;
            } else {
              // If no more data, set hasMorePages to false
              setHasMorePages(false);
            }
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      }
        console.log('load more')
    }, [inView, hasMorePages]);
    return (
      <>
          <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item, index) => (
          <AnimeCard key={index} data={item} index={index} />
        ))}
      </section>
        <section className="flex justify-center items-center w-full mt-16">
          <div ref={ref}>
            {isLoading && hasMorePages &&  (
              <Image
                src="./spinner.svg"
                alt="spinner"
                width={56}
                height={56}
                className="object-contain"
              />
            )}
          </div>
        </section>
      </>
    );
  }
export default LoadMore