import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Redux Imports
import { store, persistor } from './store';
import { Provider } from 'react-redux';

//ReduxPersist Imports
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);