// Combined place where all our redux process happens, where our state lives,
// where we receives action and dispatch them into reducers to update state
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const productionEnv = process.env.NODE_ENV === 'production';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'cart' ],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [ 
  !productionEnv && logger, 
  sagaMiddleware, 
].filter(Boolean);

const composeEnhancer = ( 
  !productionEnv && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  ) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);