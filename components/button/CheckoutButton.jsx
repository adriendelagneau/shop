"use client"

import { useCartStore } from "@/store/cart";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react"

export default function CheckoutButton() {
    
    const cart = useCartStore((state) => state.cart)
    const { data: session, status } = useSession()


    const redirectToCheckout = async () => {
        try {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

            if (!stripe) throw new Error('Stripe failed to initialize.');

            const checkoutResponse = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cart,
                    userId: session?.user?._id, // Add the user session ID to the request body
                }),
            });

            const { sessionId } = await checkoutResponse.json();
            
            const stripeError = await stripe.redirectToCheckout({sessionId});

            if (stripeError) {
                console.error(stripeError, "here is error");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            onClick={() => cart.length > 0 && redirectToCheckout()}
            disabled={cart.length === 0}
            className="w-full px-6 py-3 mr-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-stone-900 hover:bg-stone-800 disabled:bg-gray-600">
            Checkout
        </button>
    );
}