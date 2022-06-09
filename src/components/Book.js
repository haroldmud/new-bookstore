import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removingBook } from '../redux/Books/Books';
import Input from './Inputs/Input';
import './styles/Book.css';

const Books = () => {
  const wholeBooks = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  return (
    <>
      {
        wholeBooks.map((element) => (
          <section className="movie-section" key={element.id}>
            <div>
              <b>{element.genre}</b>
              <h2>{element.title}</h2>
              <p>{element.author}</p>
              <div>
                <button type="button">Comments</button>
                <button type="button" onClick={() => dispatch(removingBook(element.id))}>Remove</button>
                <button type="button">Edit</button>
              </div>
            </div>
            <div>
              <h2>
                {element.completion}
                <span>Completed</span>
              </h2>
            </div>
            <div>
              <h2>CURRENT CHAPTER</h2>
              <b>Chapter3</b>
              <button type="button">UPDATE PROGRESS</button>
            </div>
          </section>
        ))
      }
      <hr />
      <Input />
    </>
  );
};

export default Books;
