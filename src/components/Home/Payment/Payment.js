import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimplePayment from './SimplePayment';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Igp7nH2IZWzvV3lDXsBSx5ztoGfpKNdJn96ZGcisvvrzYuy4AVYYJOLNjOpNzFaaTZ3BaEq3JErLROUa9T5jocr00nfcawL8C');

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
            <SimplePayment></SimplePayment>
    </Elements>
        </div>
    );
};

export default Payment;