import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checking } from '../redux/Categories/Categories';
import './styles/Category.css';

function Categories() {
  const checkSelect = useSelector((state) => state.Categories);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Here are the categories</h1>
      <button className="cat" type="button" onClick={() => dispatch(checking())}>check status</button>
      <p>{checkSelect}</p>
    </>
  );
}

export default Categories;
