import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createWrapper} from 'next-redux-wrapper';
import { movieReducer } from './reducers/movieReducer'

const initialState = {};
const middleware = [thunk];


// create a makeStore function
const makeStore = context => createStore(movieReducer, initialState,
  composeWithDevTools(applyMiddleware(...middleware)));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});