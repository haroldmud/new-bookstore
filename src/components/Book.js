import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { removingBook, displayingBook } from '../redux/Books/Books';
import Input from './Inputs/Input';
import './styles/Book.css';

const Books = ({ displayBooks }) => {
  const wholeBooks = useSelector((state) => state.bookReducer);
  useEffect(() => {
    displayBooks();
  }, []);
  const dispatch = useDispatch();
  return (
    <>
      {
        wholeBooks.map((element) => (
          <section className="movie-section" key={element.id}>
            <div>
              <b>{element[1][0].author}</b>
              <h2>{element[1][0].title}</h2>
              <p>{element[1][0].category}</p>
              <div>
                <button type="button">Comments</button>
                <button type="button" onClick={() => dispatch(removingBook(element[0]))}>Remove</button>
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

const passDispatchToProps = (dispatch) => ({ displayBooks: () => dispatch(displayingBook()) });

export default connect(null, passDispatchToProps)(Books);
