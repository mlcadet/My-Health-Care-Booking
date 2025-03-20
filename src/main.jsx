import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import AppContextProvider from './context/AppContext';

// Stripe imports
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Actual publishable key from Stripe
const stripePromise = loadStripe('pk_test_51Qtg1eGKA3uhYryux4Gs81jbz8AAVYUzXOiao4c8V3GKM4VcxoJUiU4hlUCtSNkLyXPdt984hljpO76UHH1nIDKq00UfgrjYiw');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        {/* Wrap App with Stripe Elements provider */}
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
