import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import Book from './components/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>,
);
