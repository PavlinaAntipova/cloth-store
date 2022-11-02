import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import { store } from 'redux/store';

import { App } from 'components/App';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/cloth-store'>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
        </Provider>
      </QueryClientProvider>
  </BrowserRouter>

);
