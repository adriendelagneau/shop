'use client'

import { useEffect, useState } from "react"
import { useRouter, useSearchParams, usePathname } from 'next/navigation';


const LoadMore = ({ pageText, totalPages}) => {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get("page") || 1));
  const router = useRouter();
  const pathname = usePathname();

 // Effect to update the page state when the URL changes
 useEffect(() => {
  // Parse the 'page' parameter from the URL and update the state
  setPage(parseInt(searchParams.get("page") || 1));
}, [searchParams]);
  
  useEffect(() => {
    // Create a new URLSearchParams object
    const newParams = new URLSearchParams(searchParams);

    // Set or delete the 'query' parameter based on the search query value
    // Debounce the execution to reduce the frequency of updates
  
        if (!page || page == 1) {
          newParams.delete('page');

        
        } else {
          newParams.set('page', page);

        }

        // Push the updated URL to the router
        router.push(`${pathname}?${newParams.toString()}`);

}, [page, router, pathname]);
  
console.log(totalPages, "ttop")
  
  return (
    <div>
      <div>page: {page}</div>
      {page > 1 &&
      <div onClick={() => setPage(page - 1)}>prev page</div>
      }


      {page < totalPages &&
      <div onClick={() => setPage(page + 1)}>next page</div>
      }

    </div>
  );
};

export default LoadMore;
