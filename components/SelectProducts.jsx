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
 

  const router = useRouter()


  useEffect(() => {
    // Update the URL with the selected values
    let newUrl = constructUrl(category, brand, sort, search);
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