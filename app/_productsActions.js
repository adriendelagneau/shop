"use server"

import Product from "@/lib/models/Product"

export const getProducts = async () => {
    try {
        const products = await Product.find()
        return products
    } catch (err) {
        console.log(err)
    }
}