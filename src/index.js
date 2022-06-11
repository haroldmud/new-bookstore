import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Categories from './components/Categories';
import Book from './components/Book';
import Storing from './redux/configureStore';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Storing}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
