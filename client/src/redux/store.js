// Combined place where all our redux process happens, where our state lives,
// where we receives action and dispatch them into reducers to update state
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';

// Little library helpers that run before an action hits a reducer
  // action -> middleware -> reducer
const middleWares = [ logger ];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);