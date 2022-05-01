import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import Theme from './Theme/Theme.component';
import App from './App';

import './index.css';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Theme>
            <App />
          </Theme>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
