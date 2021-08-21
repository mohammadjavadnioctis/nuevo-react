import { createStore, applyMiddleware } from 'redux';
import employeesReducer from './reducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



const store = createStore( employeesReducer,applyMiddleware(thunk))

export default store;