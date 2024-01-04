import { NextResponse} from "next/server";
import {headers} from "next/headers";

import stripe from "@/lib/stripe"; 
import Order from "@/lib/models/Order";


export const POST = async (req) => {
    
    const headersList = headers();
    const {cart, userId} = await req.json();

   
    const lineItems = cart.map((item) => {

        return {
            price_data: {
                currency: "eur",
                product_data: {
                    name: item.name,
                    images: [item.image]
                },
                unit_amount: item.price *100,
            },
            quantity: item.quantity,  
        };
    });

    try {



        const order = await Order.create({
            stripeId: "2",
            userId,
            cart,
            billingAddress: [""],
            totalAmount: 12,
            payementStatus: false,
        })
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${headersList.get("origin")}/`,
            cancel_url: `${headersList.get("origin")}/`,
            metadata: { orderId: order._id.toString() },
            shipping_address_collection: {
                allowed_countries: ["FR"]
            },
        });

        return NextResponse.json({sessionId: session.id});
    } catch (err) {
        console.log(err)
        return NextResponse.json({error: "Error creating checkout session"});
    }
}