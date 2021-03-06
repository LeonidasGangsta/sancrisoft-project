import rootReducer from '../reducer';
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';

//ThunkMiddleware for async calls to the API
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(ReduxThunk)
));

export const persistor = persistStore(store);