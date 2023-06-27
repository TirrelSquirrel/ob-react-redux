import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import config fiunction of app store
import {createAppAsyncStore, createAppStore} from './store/config/storeConfig'
import { Provider } from 'react-redux';

import AppReduxSaga from './AppReduxSaga';

// let appStore = createAppStore()
let appAsyncStore = createAppAsyncStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>
);

// ! LA CLASE VA POR EL MINUTO 37 CON ALGO, LE QUEDAN 21 MIN DE CLASE
// ! JUSTO ESTA INSTALANDO EL FORMIK

reportWebVitals();
