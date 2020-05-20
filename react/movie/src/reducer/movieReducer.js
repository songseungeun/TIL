/* eslint-disable no-unreachable */
/* eslint-disable default-case */
export const initialState = {
  movieState: [
    {
      id: "",
      title: "",
      release_date: "",
      poster_path: "",
      overview: "",
      vote_average: "",
    },
  ],
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

export const reducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "LOADING":
      return {
        movieState: initialState.movieState,
        error: initialState.error,
        loading: true,
      };
    case "ERROR":
      return console.log("E");
    // {
    //   movieState: initialState.movieState,
    //   error: action.error,
    //   loading: initialState.loading,
    // };
    case "SUCCESS":
      return {
        movieState: action.data,
        error: initialState.error,
        loading: initialState.loading,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
