import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import myCartReducer from './myCartReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['myCart']
}

const rootReducer = combineReducers({
    myCart: myCartReducer,
    productsList: productsReducer
})

export default persistReducer(persistConfig, rootReducer);