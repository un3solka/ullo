import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Array of all middlewares to be applied.
const middlewares = [thunk];

// devtools for debugging in dev environment.
const devTools =
  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (a) => a;
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), devTools),
);

export default store;
