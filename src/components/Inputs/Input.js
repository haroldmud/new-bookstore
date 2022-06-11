import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addingBook } from '../../redux/Books/Books';
import '../styles/Input.css';

function Input() {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });
  const onChangeTitle = (e) => {
    setNewBook({
      title: e.target.value,
      author: newBook.author,
    });
  };
  const onChangeAuthor = (e) => {
    setNewBook({
      author: e.target.value,
      title: newBook.title,
    });
  };

  return (
    <div className="input">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input className="nameInput" type="text" placeholder="Book title" value={newBook.title} onChange={onChangeTitle} />
        <input className="atrInput" type="text" placeholder="Author" value={newBook.author} onChange={onChangeAuthor} />
        <button
          type="button"
          onClick={() => {
            setNewBook({
              title: '',
              author: '',
            });
            return dispatch(addingBook(newBook));
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Input;
