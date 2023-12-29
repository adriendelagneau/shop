"use server"

import Product from "@/lib/models/Product"



export const getProducts = async (page = 1, limit = 12, query, category, brand, sort) => {
    console.log("action");
    try {
        // Build the filter object based on the provided parameters
        const filter = {};
        if (category) {
            filter.category = category;
        }
        if (brand) {
            filter.brand = brand; 
        }



        // Combine the filter and search criteria
        const combinedFilter = { ...filter};

        // Calculate skipCount
        const skipCount = (page - 1) * limit;

        // Build the sort object based on the provided sort parameter or use default sorting options
        let sortOptions = {};
        if (sort === 'priceDes') {
            sortOptions = { price: 1 };
        } else if (sort === 'priceAsc') {
            sortOptions = { price: -1 };
        } else {
            sortOptions = { createdAt: 1 }; // Default sorting by createdAt in ascending order
        }
        
        // Use the combined filter and sort objects in the find query
        const result = await Product.find(combinedFilter).skip(skipCount).limit(limit).sort(sortOptions);

        // Calculate the total number of pages
        const totalPages = Math.ceil(result.length / limit);

        // Convert MongoDB objects to plain objects
        const plainObject = result.map(item => item.toObject());

        // Return the products along with total pages
        return { products: plainObject, totalPages };
    } catch (err) {
        console.log(err);
        throw err; // Rethrow the error to handle it at a higher level
    }
};