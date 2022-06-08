const ADDING_BOOK = "bookstore/redux/Books/ADDING_BOOK";
const REMOVING_BOOK = "bookstore/redux/Books/REMOVING_BOOK";
const DISPLAYING_BOOK = "bookstore/redux/Books/DISPLAYING_BOOK";
const initStore = [];

const bookStore = (state = initStore, action) => {
  switch (action.type) {
    case "ADDING_BOOK": {
      initStore = [...state, action.newBook];
      return initStore;
    }
    case "REMOVING_BOOK": {
      initStore = state.filter((bk) => bk.id !== action.id);
      return initStore;
    }
    case "DISPLAYING_BOOK":
      return initStore;
    default:
      return state;
  }
};

export default bookStore;

export function addingBook(newBook) {
  return { type: ADDING_BOOK, newBook };
}

export function removingBook(id) {
  return { type: REMOVING_BOOK, id };
}

export function desplayingBook() {
  return { type: DISPLAYING_BOOK };
}
