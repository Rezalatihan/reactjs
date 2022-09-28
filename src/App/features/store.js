import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import counterReducer from './Counter/reducer';

let rootReducers = combineReducers({
    counter: counterReducer
});

//mengkonekan ke extension browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

// const composeEnhancers = window.__REDUX_DEVTOOLS_

export default store