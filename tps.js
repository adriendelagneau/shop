import { getProducts } from '@/app/_productsActions'
import SearchBar from '@/components/SearchBar';
import SelectProducts from '@/components/SelectProducts';
import React from 'react'

const ProductPage = async ({ searchParams }) => {
  
  



  const data = await getProducts(
    searchParams?.page || 1,
    searchParams?.limit || 3,
    searchParams?.search || "",
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
        {/*
      */}
      <SearchBar searchParams={searchParams} />
      <SelectProducts searchParams={searchParams} />
        

        </div>
  )
}

export default ProductPage


'use client'

import { useEffect, useState } from "react";
import Select from "./Select";
import { useRouter } from "next/navigation";
import { constructUrl } from "@/utils/constructUrl";

const SelectProducts = ({ searchParams }) => {

  const [category, setCategory] = useState(searchParams?.category || '');
  const [brand, setBrand] = useState(searchParams?.brand || '');
  const [sort, setSort] = useState(searchParams?.sort || '');
  const search = searchParams?.search || ''
  const page = searchParams?.page || 1

  const router = useRouter()


  useEffect(() => {
    // Update the URL with the selected values
    let newUrl = constructUrl(page, category, brand, sort, search);
    router.push(`/products${newUrl}`);

  }, [category, brand, sort, router]);



  // Options for each select
  const categoryOptions = [
    { label: 'Category ', value: '' },
    { label: 'Shoes', value: 'shoes' },
    { label: 'Top', value: 'top' },
  ];

  const brandOptions = [
    { label: 'Brand', value: '' },
    { label: 'Nike', value: 'nike' },
    { label: 'Addidas', value: 'addidas' },
  ];

  const sortOptions = [
    { label: 'Last arrived', value: '' },
    { label: 'Price Low to High', value: 'priceDes' },
    { label: 'Price High to Low', value: 'priceAsc' },
  ];
  return (
    <div>
      <Select label="Category" options={categoryOptions} value={category} onChange={(e) => setCategory(e.target.value)} />
      <Select label="Brand" options={brandOptions} value={brand} onChange={(e) => setBrand(e.target.value)} />
      <Select label="Sort By" options={sortOptions} value={sort} onChange={(e) => setSort(e.target.value)} />
    </div>
  )
}

export default SelectProducts

'use client'

import { useEffect, useState } from "react";
import { useRouter} from "next/navigation";
import { constructUrl } from "@/utils/constructUrl";

const SearchBar = ({ searchParams }) => {
  const router = useRouter()

  const [search, setSearch] = useState(searchParams?.search || '')
  const category = searchParams?.category || '';
  const brand = searchParams?.brand || ''
  const sort = searchParams?.sort || ''
  const page = searchParams?.page || 1
  




  useEffect(() => {

    const delayDebounce = setTimeout(() => {


      let newUrl = constructUrl(page, category, brand, sort, search);
      router.push(`/products${newUrl}`);
    }, 300)
    return () => clearTimeout(delayDebounce);
  }, [search, router])



  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

 

 
    </div>
  );
};

export default SearchBar;








const router = useRouter();
router.push(
 {
   pathname: '/cars',
   query: {
     colors,
     type,
     price,
 },
 undefined,
 {
   shallow: true,
  },
)