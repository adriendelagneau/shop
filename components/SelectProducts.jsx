'use client'

import { useEffect, useState } from "react";
import Select from "./Select";
import { useRouter } from "next/navigation";
import { constructUrl } from "@/utils/constructUrl";

const SelectProducts = ({ searchParams }) => {

    const [category, setCategory] = useState(searchParams?.category || '');
    const [brand, setBrand] = useState(searchParams?.brand || '');
  const [sort, setSort] = useState(searchParams?.sort || '');
  const search =  searchParams?.search  || ''
  const router = useRouter()

/*
  useEffect(() => {
    // Initialize state with the corresponding searchParams if they exist to prevent reset on refresh
    if (searchParams) {
        const { category: initCategory, brand: initBrand, sort: initSort } = searchParams;
        if (initCategory) setCategory(initCategory);
        if (initBrand) setBrand(initBrand);
        if (initSort) setSort(initSort);
    }
}, [searchParams]);
*/
  useEffect(() => {
    // Update the URL with the selected values
    let newUrl = constructUrl(category, brand, sort, search);
    router.push(`/products${newUrl}`);

    console.log("select")
}, [category, brand, sort, router]);

    

      // Options for each select
  const categoryOptions = [
    { label: 'Category ', value: '' },
    { label: 'Category 1', value: 'shoes' },
    { label: 'Category 2', value: 'top' },
    // Add more categories as needed
  ];

  const brandOptions = [
    { label: 'Brand', value: '' },
    { label: 'Brand 1', value: 'nike' },
    { label: 'Brand 2', value: 'addidas' },
    // Add more brands as needed
  ];

  const sortOptions = [
    { label: 'Last arrived', value: '' },
    { label: 'Price Low to High', value: 'priceDes' },
    { label: 'Price High to Low', value: 'priceAsc' },
    // Add more sorting options as needed
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