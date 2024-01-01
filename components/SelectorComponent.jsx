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
    brand: [
      { label: 'Brand', value: '' },
      { label: 'Nike', value: 'nike' },
      { label: 'Addidas', value: 'addidas' },
    ],
    sort: [
      { label: 'Last arrived', value: '' },
      { label: 'Price Low to High', value: 'priceDes' },
      { label: 'Price High to Low', value: 'priceAsc' },
    ],
  };

  return (
    <div>
      <div>
        <Select
          label="Category"
          options={selectOptions.category}
          value={queryParams.category}
          onChange={(e) => handleSelectChange('category', e.target.value)}
        />
        <Select
          label="Brand"
          options={selectOptions.brand}
          value={queryParams.brand}
          onChange={(e) => handleSelectChange('brand', e.target.value)}
        />
        <Select
          label="Sort By"
          options={selectOptions.sort}
          value={queryParams.sort}
          onChange={(e) => handleSelectChange('sort', e.target.value)}
        />
      </div>
    </div>
  );
};

export default SelectorComponent;
