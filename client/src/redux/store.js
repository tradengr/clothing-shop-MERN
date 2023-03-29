// Combined place where all our redux process happens, where our state lives,
// where we receives action and dispatch them into reducers to update state
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const productionEnv = process.env.NODE_ENV === 'production';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'cart' ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [ !productionEnv && logger, thunk ].filter(Boolean);
const composeEnhancer = ( 
  !productionEnv && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  ) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);