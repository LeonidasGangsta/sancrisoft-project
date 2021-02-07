import rootReducer from '../reducer';
import { createStore, applyMiddleware, compose } from 'redux';

//ThunkMiddleware for async calls to the API
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(ReduxThunk)
));

export default store;