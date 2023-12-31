'use client'

import { useEffect, useState } from "react"
import { useRouter, useSearchParams, usePathname } from 'next/navigation';


const SearchCompoent = ({ queryText }) => {
    const [query, setQuery] = useState(queryText);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    // Effect to update the URL when the search query changes
    useEffect(() => {
        // Create a new URLSearchParams object
        const newParams = new URLSearchParams(searchParams);

        // Set or delete the 'query' parameter based on the search query value
        // Debounce the execution to reduce the frequency of updates
        const delayDebounceFn = setTimeout(() => {
            if (!query) {
                newParams.delete('query');
            } else {
                newParams.set('query', query);
            }

            // Push the updated URL to the router
            router.push(`${pathname}?${newParams.toString()}`);
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [query, router, pathname]);

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