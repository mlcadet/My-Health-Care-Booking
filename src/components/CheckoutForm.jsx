// components/CheckoutForm.jsx
import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Stripe error:', error.message);
      return;
    }

    // Send paymentMethod.id to your server to create a payment
    const res = await fetch('http://localhost:3002/user/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 200, // in dollars
        id: paymentMethod.id,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert('Payment successful!');
    } else {
      alert('Payment failed: ' + data.message);
    }
  };

  return (
    <form onSubmit={handlePayment} className="max-w-md mx-auto p-4">
      <CardElement className="p-2 border" />
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
        disabled={!stripe}
      >
        Pay $200
      </button>
    </form>
  );
};

export default CheckoutForm;
