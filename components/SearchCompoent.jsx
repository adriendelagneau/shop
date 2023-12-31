'use client'

import { useEffect, useState } from "react"
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
//import { formUrlQuery, removeKeysFromQuery } from '@/utils/handleReqParams'

const SearchCompoent = ({ queryText }) => {

    const [query, setQuery] = useState(queryText);
    const router = useRouter();
    const searchParams = useSearchParams();


    const pathname = usePathname();

    useEffect(() => {

        const newParams = new URLSearchParams(searchParams)
        
        const delayDebounceFn = setTimeout(() => {
            if (!query) {
                newParams.delete('query');
            } else {
                newParams.set('query', query);
            }
            router.push(`${pathname}?${newParams.toString()}`);
        }, 300)

        return () => clearTimeout(delayDebounceFn);
    }, [query, router,  pathname]);

    return (
        <div>
            <input
                type="text"
                value={query}
                placeholder="search"
                onChange={(e) => setQuery(e.target.value)}
                className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
        </div>
    )
}

export default SearchCompoent