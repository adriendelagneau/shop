"use server"

import { connectToDatabase } from "@/lib/db";
import Product from "@/lib/models/Product"



export const getProducts = async (page = 1, limit = 3, query, category, brand, sort) => {

    await connectToDatabase()
    try {
        // Build the filter object based on the provided parameters
        const filter = {};
        if (category) {
            filter.category = category;
        }
        if (brand) {
            filter.brand = brand;
        }

        // Build the search criteria for name, category, and description
        const searchCriteria = query
            ? {
                $or: [
                    { name: { $regex: new RegExp(query, 'i') } }, // Case-insensitive regex match for name
                    { category: { $regex: new RegExp(query, 'i') } }, // Case-insensitive regex match for category
                    { brand: { $regex: new RegExp(query, 'i') } }, // Case-insensitive regex match for category
                    { description: { $regex: new RegExp(query, 'i') } }, // Case-insensitive regex match for description
                ],
            }
            : {};

        // Combine the filter and search criteria
        const combinedFilter = { ...filter, ...searchCriteria };




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
        
      //  console.log(skipCount, "sk")
        // Use the combined filter and sort objects in the find query
        const allResult = await Product.find(combinedFilter);
        
        const result = await Product.find(combinedFilter).skip(skipCount).limit(limit).sort(sortOptions);

       

        // Calculate the total number of pages
        const totalPages = Math.ceil(allResult.length / limit);

        // Convert MongoDB objects to plain objects
        JSON.parse(JSON.stringify(result))
        const plainObject = JSON.parse(JSON.stringify(result))


       
        // Return the products along with total pages
        return { products: plainObject, totalPages };
    } catch (err) {
        console.log(err);
        throw err; // Rethrow the error to handle it at a higher level
    }
};