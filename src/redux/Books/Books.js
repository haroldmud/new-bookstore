const ADDING_BOOK = 'bookstore/redux/Books/ADDING_BOOK';
const REMOVING_BOOK = 'bookstore/redux/Books/REMOVING_BOOK';
const DISPLAYING_BOOK = 'bookstore/redux/Books/DISPLAYING_BOOK';
const initStore = [
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
];

const bookReducer = (state = initStore, action) => {
  switch (action.type) {
    case ADDING_BOOK: {
      const myBook = {
        id: state.length + 1,
        genre: 'action',
        author: action.bk.author,
        title: action.bk.title,
        completion: '10%',
        chapter: 'chapter3',
      };
      return [...state, myBook];
    }
    case REMOVING_BOOK: {
      const removeStore = state.filter((bk) => bk.id !== action.id);
      return removeStore;
    }
    case DISPLAYING_BOOK:
      return initStore;
    default:
      return state;
  }
};

export default bookReducer;

export function addingBook(bk) {
  return { type: ADDING_BOOK, bk };
}

export function removingBook(id) {
  return { type: REMOVING_BOOK, id };
}

export function desplayingBook() {
  return { type: DISPLAYING_BOOK };
}
