import { NextResponse} from "next/server";
import {headers} from "next/headers";

import stripe from "@/lib/stripe"; 


export const POST = async (req) => {
    
    const headersList = headers();
    const cartDetails = await req.json();
    
    console.log(cartDetails, "ct")

    const cartDetailsArray = Object.values(cartDetails);

    const lineItems = cartDetailsArray.map((item) => {
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
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${headersList.get("origin")}/`,
            cancel_url: `${headersList.get("origin")}/`,
        });

        return NextResponse.json({sessionId: session.id});
    } catch (err) {
        console.log(err)
        return NextResponse.json({error: "Error creating checkout session"});
    }
}