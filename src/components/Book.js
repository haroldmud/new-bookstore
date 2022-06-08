import React, { Component } from 'react';
import Input from './Inputs/Input';
import './styles/Book.css';

class Books extends Component {
    state = {
      book: [
        {
          id: 0,
          genre: 'action',
          author: 'Suzanne Morgenstein',
          title: 'Hunger Game',
          completion: '60%',
          chapter: 'chapter3',
        },
        {
          id: 1,
          genre: 'action',
          author: 'Joseph Morgan',
          title: 'Vempire diaries',
          completion: '40%',
          chapter: 'chapter2',
        },
      ],
    }

    addBook = (singleBook) => {
      const myBook = {
        id: this.state.book.length + 1,
        genre: 'action',
        author: singleBook.author,
        title: singleBook.title,
        completion: '10%',
        chapter: 'chapter3',
      };
      this.setState({ book: [...this.state.book, myBook] });
    }

    render() {
      return (
        <>
          {
                    this.state.book.map((element) => (
                      <section className="movie-section" key={element.id}>
                        <div>
                          <b>{element.genre}</b>
                          <h2>{element.title}</h2>
                          <p>{element.author}</p>
                          <div>
                            <button type="button">Comments</button>
                            <button type="button">Remove</button>
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
          <Input addBookProp={this.addBook} />
        </>
      );
    }
}

export default Books;
