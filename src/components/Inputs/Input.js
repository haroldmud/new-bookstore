import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addingBook } from '../../redux/Books/Books';

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
    <div>
      <h2>ADD NEW BOOK</h2>
      <input type="text" placeholder="Book title" onChange={onChangeTitle} />
      <input type="text" placeholder="Author" onChange={onChangeAuthor} />
      <button type="button" onClick={() => dispatch(addingBook(newBook))}>
        ADD BOOK
      </button>
    </div>
  );
}

export default Input;
