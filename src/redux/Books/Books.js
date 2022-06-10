import axios from 'axios';

export const POST_GET_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XYkXQvOmkPCX9J8oifx5/books';
const ADDING_BOOK = 'bookstore/redux/Books/ADDING_BOOK';
const REMOVING_BOOK = 'bookstore/redux/Books/REMOVING_BOOK';
const DISPLAYING_BOOK = 'bookstore/redux/Books/DISPLAYING_BOOK';
let initStore = [
  // {
  //   id: 0,
  //   genre: "action",
  //   author: "Suzanne Morgenstein",
  //   title: "Hunger Game",
  //   completion: "60%",
  //   chapter: "chapter3",
  // },
  // {
  //   id: 1,
  //   genre: "action",
  //   author: "Joseph Morgan",
  //   title: "Vempire diaries",
  //   completion: "40%",
  //   chapter: "chapter2",
  // },
];

const bookReducer = (state = initStore, action) => {
  switch (action.type) {
    case ADDING_BOOK: {
      const myBook = {
        item_id: `item${Date.now()}`,
        category: 'action',
        author: action.bk.author,
        title: action.bk.title,
      };
      const newMyBook = [
        `item${Date.now()}`,
        [
          {
            category: 'action',
            author: action.bk.author,
            title: action.bk.title,
          },
        ],
      ];

      axios.post(POST_GET_URL, myBook);

      initStore = [...state, newMyBook];
      return initStore;
    }

    case REMOVING_BOOK: {
      axios.delete(`${POST_GET_URL}/${action.id}`);
      initStore = state.filter((bk) => bk[0] !== action.id);
      return initStore;
    }

    case DISPLAYING_BOOK:
      return action.newState;
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

export function displayingBook() {
  return (dispatch) => {
    axios.get(POST_GET_URL).then((response) => {
      const newState = Object.entries(response.data);
      dispatch({ type: DISPLAYING_BOOK, newState });
    });
  };
}
