import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

import { store, persistor } from './redux/store';
import { stripePromise } from './stripe/stripe.utils';

import Theme from './Theme/Theme.component';
import App from './App';

import './index.css';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <Theme>
              <App />
            </Theme>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </Elements>
  </React.StrictMode>,
  rootElement
);
