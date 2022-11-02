import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Layout from './Layout';

import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import NewsletterPage from '../pages/NewsletterPage';
import CaterogyPage from '../pages/CategoryPage';
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';
import FilterPage from '../pages/FilterPage';
import SearchPage from '../pages/SearchPage';
import OrderPage from '../pages/OrderPage';
import NotFoundPage from '../pages/NotFoundPage';

import { useGetOffersQuery } from 'redux/api';
import { theme } from 'helper/styled-theme';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const offers = useGetOffersQuery();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage offers={offers} />} />
        <Route path="contact" element={<ContactPage offers={offers}/>} />
        <Route path="newsletter" element={<NewsletterPage offers={offers}/>} />
        <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage offers={offers}/>} />
          <Route path="order" element={<OrderPage />} />
          
         
          <Route path="offer" element={<FilterPage />}>
            <Route path=":id" element={<FilterPage />} />
          </Route>
          
          <Route path="category" element={<CaterogyPage offers={offers} />}>
            <Route path=":id" element={<CaterogyPage offers={offers} />}>
              <Route path=":subId" element={<CaterogyPage offers={offers} />}/>
            </Route>
          </Route>
          
        <Route path="product" element={<ProductPage />}>
          <Route path=":id" element={<ProductPage />}/>
        </Route>
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage offers={offers} />} />
      </Route>
      </Routes>
      <ToastContainer />
      </ThemeProvider>

  );
};
