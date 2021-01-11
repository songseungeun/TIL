import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  movies: null,
  movie: null,
  loading: false,
  error: null,
};

export const movieReducer = (state = {tick: 'init'}, action) => {
  switch (action.type) {
      case HYDRATE:
          return {...state, ...action.payload};
      case 'TICK':
          return {...state, tick: action.payload};
      case 'GET_MOVIES':
          return {...state, movie: action.payload};
      default:
          return state;
  }
};