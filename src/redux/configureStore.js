import { combineReducers, createstore } from 'react-redux';
import bookStore from './Books/Books';
import Categories from './Categories/Categories';

const reducerRoot = combineReducers({
  bookStore,
  Categories,
});

const storing = createstore(reducerRoot);

export default storing;
