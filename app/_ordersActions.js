'use server'

import { connectToDatabase } from "@/lib/db"
import Order from "@/lib/models/Order"


export const createOrder = async () => {
    console.log("createOrder action")
    await connectToDatabase()


    
    try {
        const newOrder = new Order({
            stripeId: "jhgy",
            userId: "jhgy",
            cart: [
              {
                product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
                quantity: 1, // You can adjust this based on your needs
              },
            ],
            billingAddress: ["erre"],
            totalAmount: 12,
            isDelivered: false,
        },)

        await newOrder.save()
        

    } catch (err) {
        redirect(`/errors?errror=${err.message}`)
        console.log(err, "action")
    }
}