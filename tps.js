useEffect(() => {
    // Construct the new URL with the updated search query
    const newUrl = constructUrl({
      category: searchParams.get("category") || "",
      brand: searchParams.get("brand") || "",
      sort: searchParams.get("sort") || "",
      search: searchQuery,
    });

    // Push the updated URL to the router
    router.push(`/products${newUrl}`);
}, [searchQuery, searchParams, router]);
  



const searchParams = useSearchParams()
const [searchQuery, setSearchQuery] = useState("")
let category = searchParams.get("category") || ""
let brand = searchParams.get("brand") || ""
let sort = searchParams.get("sort") || ""