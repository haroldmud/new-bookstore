import React, { useState } from 'react';

const Input = (props) => {
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    })

    const onChangeTitle = (e) => {
        setNewBook({
            title : e.target.value,
            author: newBook.author, 
        })
    }

    const onChangeAuthor = (e) => {
        setNewBook({
            author: e.target.value,
            title: newBook.title,
        })
    }
   
    const submitBook = (e) => {
        e.preventDefault();
        props.addBookProp(newBook);
    }
    return (
        <div>
        <h2>ADD NEW BOOK</h2>
        <form onSubmit = {submitBook}>
            <input type="text" placeholder='Book title' onChange={onChangeTitle}/>
            <input type="text" placeholder='Author' onChange={onChangeAuthor}/>
            <button type='submit'>ADD BOOK</button>
        </form>
    </div> 
    );
}

export default Input;