import React, { createContext, useReducer, useContext } from "react";
// import createAsyncDispatcher from "./asyncActionUtils";
import { movies } from "./api";

const initialState = {
  now: {
    loading: false,
    data: null,
    error: null,
  },
  top: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

function moviesReducer(state, action) {
  switch (action.type) {
    case "GET_NOW":
      return {
        ...state,
        now: loadingState,
      };
    case "GET_NOW_SUCCESS":
      return {
        ...state,
        now: success(action.data),
      };
    case "GET_NOW_ERROR":
      return {
        ...state,
        now: error(action.error),
      };
    case "GET_TOP":
      return {
        ...state,
        now: loadingState,
      };
    case "GET_TOP_SUCCESS":
      return {
        ...state,
        now: success(action.data),
      };
    case "GET_TOP_ERROR":
      return {
        ...state,
        now: error(action.error),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const NowStateContext = createContext(null);
const NowDispatchContext = createContext(null);

export function NowProvider({ children }) {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  return (
    <NowStateContext.Provider value={state}>
      <NowDispatchContext.Provider value={dispatch}>
        {children}
      </NowDispatchContext.Provider>
    </NowStateContext.Provider>
  );
}

export function useNowState() {
  const state = useContext(NowStateContext);
  if (!state) {
    throw new Error("Cannot find Movies Provider");
  }
  return state;
}

export function useNowDispatch() {
  const dispatch = useContext(NowDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find Movies Provider");
  }
  return dispatch;
}

export async function getNow(dispatch) {
  dispatch({ type: "GET_NOW" });
  try {
    const response = await movies.getNowPlaying();
    dispatch({ type: "GET_NOW_SUCCESS", data: response.data.results });
  } catch (e) {
    dispatch({ type: "GET_NOW_ERROR", error: e });
  }
}

export async function getTop(dispatch) {
  dispatch({ type: "GET_TOP" });
  try {
    const response = await movies.getPopular();
    dispatch({ type: "GET_TOP_SUCCESS", data: response.results });
  } catch (e) {
    dispatch({ type: "GET_TOP_ERROR", error: e });
  }
}
