import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

const promise = loadStripe("pk_test_51IalToAQmXzgarKriNlG0enhbeYqakTPb3e8GyHE6mbNLEIZMACg8k5J0Ul8GPk9nFEsbuyBAUzhCMF5AELLp0CZ003isiZgwB");

function CheckoutForm2() {
    return (
        <div>
            <Elements stripe={promise}>
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default CheckoutForm2
