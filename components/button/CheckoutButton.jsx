"use client"

import { useCartStore } from "@/store/cart";
import {loadStripe} from "@stripe/stripe-js";

export default function CheckoutButton() {
    
    const cart = useCartStore((state) => state.cart)

    const redirectToCheckout = async () => {
        try {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

            if (!stripe) throw new Error('Stripe failed to initialize.');

            const checkoutResponse = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cart),
            });

            const {sessionId} = await checkoutResponse.json();
            const stripeError = await stripe.redirectToCheckout({sessionId});

            if (stripeError) {
                console.error(stripeError);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            onClick={() => cart.length > 0 && redirectToCheckout()}
            disabled={cart.length === 0}
            className="px-6 py-3 mr-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-900 hover:bg-sky-700 disabled:bg-gray-600">
            Checkout
        </button>
    );
}