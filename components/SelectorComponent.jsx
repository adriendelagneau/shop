'use client'
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Select from "./Select";

const SelectorComponent = ({ categoryText, brandText, sortText }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // State for managing query parameters
  const [queryParams, setQueryParams] = useState({
    category: categoryText,
    brand: brandText,
    sort: sortText,
  });

  // Function to handle changes in Select components
  const handleSelectChange = (name, value) => {
    setQueryParams((prevParams) => ({ ...prevParams, [name]: value }));
  };

  // Effect to update the URL when query parameters change
  useEffect(() => {


    // Create a new URLSearchParams object
    const newParams = new URLSearchParams(searchParams);

    // Iterate through query parameters and update the newParams object
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      //  newParams.delete('page')
      } else {
        newParams.delete(key);
      }
    });

    // Push the updated URL to the router
    router.push(`${pathname}?${newParams.toString()}`);
  }, [queryParams, router, pathname]);

  // Configuration object for options of each Select component
  const selectOptions = {
    category: [
      { label: 'Category ', value: '' },
      { label: 'Shoes', value: 'shoes' },
      { label: 'Top', value: 'top' },
    ],
  
    sort: [
      { label: 'Last arrived', value: '' },
      { label: 'Price Low to High', value: 'priceDes' },
      { label: 'Price High to Low', value: 'priceAsc' },
    ],
  };

  return (
    <div>
      <div  className='flex justify-between max-w-5xl p-3 m-auto mt-5'>
        <Select
          label=""
          options={selectOptions.category}
          value={queryParams.category}
          onChange={(e) => handleSelectChange('category', e.target.value)}
  
        />
       
        <Select
          label=""
          options={selectOptions.sort}
          value={queryParams.sort}
          onChange={(e) => handleSelectChange('sort', e.target.value)}
        className="text-5xl"
        />
      </div>
    </div>
  );
};

export default SelectorComponent;
