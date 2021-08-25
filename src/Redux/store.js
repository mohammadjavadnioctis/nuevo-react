import { createStore, applyMiddleware, combineReducers } from 'redux';
import employeesReducer from './reducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import searchReducer from './search/searchReducer';



// const rootReducer = combineReducers({
//     user: userReducer,
//     cart: cartReducer,
//     directory: directoryReducer,
//     shop: shopReducer
//   });
const rootReducer = combineReducers({
    employeesReducer,
    searchReducer,
})
const store = createStore( rootReducer,applyMiddleware(thunk))

export default store;