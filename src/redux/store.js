import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk';
import { HomeReducer } from './reducer/HomeReducer';
import { StudentReducer } from './reducer/StudentReducer';

const rootReducer = combineReducers({
    HomeReducer,
    StudentReducer,
})

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare);

export const store = createStore(rootReducer, composeCustom);