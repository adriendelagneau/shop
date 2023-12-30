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

  




  useEffect(() => {

    const delayDebounce = setTimeout(() => {


      let newUrl = constructUrl(category, brand, sort, search);
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

