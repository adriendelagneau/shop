import { createOrder } from "@/app/_ordersActions";
import Order from "@/lib/models/Order";
import { NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

const fullfillOrder = async (session) => {
  
    try {
        await Order.findByIdAndUpdate(session.metadata.orderId, {
            stripeId: session.id,
            billingAddress: session.shipping,
            totalAmount: session.amount_subtotal/100,
            payementStatus: true,
        })
        return new NextResponse(null, { status: 200 });
    } catch (err) {
        return new NextResponse(`Webhook error for payment ${session.id}: ${err}`, { status: 400 });
    }
}

export const POST = async (req) => {
    const payload = await req.text()
    const sig2 = req.headers.get('stripe-signature')
    let event

    try {
        event = stripe.webhooks.constructEvent(payload, sig2, endpointSecret)
    } catch (err) {
        console.log(err);
        return new NextResponse(`Webhook error: ${err.message}`, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        console.log('li', session)
        return fullfillOrder(session);
    }

    return new NextResponse("RESPONSE EXECUTE", { status: 200 });
}

/*
export const config = {
    api: {
        bodyParser: false
    }
}
*/
