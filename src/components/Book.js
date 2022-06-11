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
      <section className="main-section">
        <div className="grid">
          {
        wholeBooks.map((element) => (
          <div className="movie-section" key={element.id}>
            <div className="book">
              <b>{element[1][0].category}</b>
              <h2>{element[1][0].title}</h2>
              <p>{element[1][0].author}</p>
              <div>
                <button className="combtn" type="button">Comments</button>
                <button className="rembtn" type="button" onClick={() => dispatch(removingBook(element[0]))}>Remove</button>
                <button className="edtbtn" type="button">Edit</button>
              </div>
            </div>
            <div className="completion">
              <div className="Circle">
                <div className="mask half">
                  <div className="fill">
                    <div className="inside-circle" />
                  </div>
                </div>
              </div>
              <div className="prct">
                <h2>50%</h2>
                <p>Completed</p>
              </div>
            </div>
            <div className="update">
              <h2>CURRENT CHAPTER</h2>
              <h3>Chapter 3</h3>
              <button type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        ))
      }
        </div>
      </section>
      <Input />
    </>
  );
};

const passDispatchToProps = (dispatch) => ({ displayBooks: () => dispatch(displayingBook()) });

export default connect(null, passDispatchToProps)(Books);
