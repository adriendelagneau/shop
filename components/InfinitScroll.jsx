"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { getProducts } from '@/app/_productsActions';
import ProductCard from './ProductCard';

let page = 2;

const InfinitScroll = ({ totalPages }) => {
  // Get current search parameters and initialize variables
  const searchParams = useSearchParams();
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);

  // Extract pagination and filtering parameters from searchParams
  const limit = 12;
  const query = searchParams?.get("query") || "";
  const category = searchParams?.get("category") || "";
  const brand = searchParams?.get("brand") || "";
  const sort = searchParams?.get("sort") || "";

  // Effect to fetch more products when component comes into view
  useEffect(() => {
    if (inView ) {
      getProducts(page, limit, query, category, brand, sort)
        .then((res) => {
          // Update data and increment page for the next fetch
          setData((prevData) => [...prevData, ...res.products]);
          page++;
        });
    }
  }, [inView]);

  // Effect to reset data and page when searchParams change (e.g., category selection)
  useEffect(() => {
    setData([]); // Reset data
    page = 2; // Reset page to initial value
  }, [searchParams]);

  return (
    <div className='flex m-auto mt-5 max-w-screen-2xl'>
      {/* Render product items */}
      <ul className="grid justify-center grid-cols-1 mx-auto mt-10 mb-5 w-fit lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14">
        {data.map((product, index) => (
          <li key={index} className="flex justify-center">
            <ProductCard productData={product} />
          </li>
        ))}
      </ul>

      {/* Render loading spinner if there are more pages */}
      {page - 1 < totalPages && (
        <div className='flex justify-center pb-28 ' ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default InfinitScroll;
