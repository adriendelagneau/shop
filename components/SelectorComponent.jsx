'use client'

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
//import { formUrlQuery, removeKeysFromQuery } from '@/utils/handleReqParams'
import Select from "./Select";


const SelectorComponent = ({ categoryText, brandText, sortText }) => {

  const searchParams = useSearchParams();
  const router = useRouter()
  const pathname = usePathname();

  const [category, setCategory] = useState(categoryText);
  const [brand, setBrand] = useState(brandText);
  const [sort, setSort] = useState(sortText)

  useEffect(() => {

    const newParams = new URLSearchParams(searchParams)


    if (!category) {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }

    if (!brand) {
      newParams.delete('brand');
    } else {
      newParams.set('brand', brand);
    }

    if (!sort) {
      newParams.delete('sort');
    } else {
      newParams.set('sort', sort);
    }

    router.push(`${pathname}?${newParams.toString()}`);

  }, [category, brand, sort, router, pathname]);



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

export default SelectorComponent