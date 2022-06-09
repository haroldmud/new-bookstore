import { combineReducers, createStore } from 'redux';
import bookReducer from './Books/Books';
import Categories from './Categories/Categories';

const reducerRoot = combineReducers({
  bookReducer,
  Categories,
});

const Storing = createStore(reducerRoot);

export default Storing;
