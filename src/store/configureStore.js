import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Iterable } from 'immutable';
import { createLogger } from 'redux-logger';
import _ from 'lodash';
import AppReducer from 'reducers';

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware
  ];

  if (__DEV__) {
    const logger = createLogger({
      collapsed: true,
      predicate: (getState, { type }) => !_.startsWith(type, '@@redux-form'),
      stateTransformer: state => (Iterable.isIterable(state) ? state.toJS() : state)
    });
    middlewares.push(logger);
  }

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(AppReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

  return store;
}
