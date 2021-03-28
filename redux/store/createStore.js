import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/rootReducers';
import thunk from 'redux-thunk';
/*
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export default storage;
*/

const persistConfig = {
    key: 'primary',//'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);



export {
    store,
    persistor
}
