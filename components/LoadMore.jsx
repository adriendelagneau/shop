'use client'

import { useEffect, useState } from "react";
import { useRouter} from "next/navigation";
import { constructUrl } from "@/utils/constructUrl";

const LoadMore = ({ searchParams, data }) => {
  const router = useRouter()

  const search =  searchParams?.search || ''
  const category = searchParams?.category || '';
  const brand = searchParams?.brand || ''
  const sort = searchParams?.sort || ''
  const [page, setPage] = useState(searchParams?.page || 1)
  
  useEffect(() => {
    let newUrl = constructUrl(page, category, brand, sort, search);
    router.push(`/products${newUrl}`);
    
  }, [page, router])
  

  
  return (
    <div>
        <div className='w-full flex gap-14 flex-wrap'>

        {data?.products.map((p, i) => (
          <div key={i} className='w-[400px] h-[400px] bg-red-500'>{p.name}</div>
          ))}
        </div>
      <div onClick={() => setPage(parseInt(page)+1)}>next page</div>
    </div>
  );
};

export default LoadMore;
