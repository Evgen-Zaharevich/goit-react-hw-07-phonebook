import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

import { GlobalStyle } from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
