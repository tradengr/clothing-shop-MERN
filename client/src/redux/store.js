import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const productionEnv = process.env.NODE_ENV === 'production';

const middleWares = [ !productionEnv && logger ].filter(Boolean);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'cart' ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({ serializableCheck: false, }).concat(middleWares)
  )
});

export const persistor = persistStore(store);


// const composeEnhancer = ( 
//   !productionEnv && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
//   ) || compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composedEnhancers);