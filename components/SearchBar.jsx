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

  //
  const [page, setPage] = useState(parseInt(searchParams?.page) || 1)



  useEffect(() => {

    const delayDebounce = setTimeout(() => {


      let newUrl = constructUrl(page, category, brand, sort, search);
      router.push(`/products${newUrl}`);
    }, 300)
    return () => clearTimeout(delayDebounce);
  }, [search, router, page])



  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

 
<div onClick={() =>   setPage((prevPage) => prevPage +1)}>next page</div>
 
    </div>
  );
};

export default SearchBar;

