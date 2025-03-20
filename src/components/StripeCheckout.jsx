import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const StripeCheckout = ({ amount, userId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setMessage(error.message);
      setProcessing(false);
      return;
    }

    const res = await fetch(`http://localhost:3002/api/user/payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount, // e.g. 200 (USD)
        id: paymentMethod.id,
        userId,
      }),
    });

    const data = await res.json();

    if (data.message === 'Payment successful') {
      setMessage('✅ Payment Complete!');
    } else {
      setMessage('❌ Payment failed');
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handlePayment} className="max-w-md p-4 border rounded">
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || processing}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
      >
        {processing ? 'Processing...' : `Pay $${amount}`}
      </button>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </form>
  );
};

export default StripeCheckout;
