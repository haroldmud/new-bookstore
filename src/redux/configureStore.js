import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './Books/Books';
import Categories from './Categories/Categories';
import logger from './logger';

const reducerRoot = combineReducers({
  bookReducer,
  Categories,
});

const Storing = createStore(reducerRoot, applyMiddleware(logger, thunk));

export default Storing;
