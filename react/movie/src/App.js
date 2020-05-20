/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useReducer } from "react";
import { movies } from "./api";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Upcoming from "./Page/Upcoming";
import NowPlaying from "./Page/NowPlaying";
import { reducer, initialState } from "./reducer/movieReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const movieFunc = async () => {
      try {
        dispatch({ type: "LOADING" });
        let movieData = await movies.getMovie();
        // console.log(movieData.data.results);
        if (movieData.status === 200) {
          dispatch({ type: "SUCCESS", data: movieData.data.results });
        } else {
          dispatch({
            type: "ERROR",
            error: {
              state: true,
              message: movieData.statusText,
            },
          });
        }
      } catch (error) {
        dispatch({
          type: "ERROR",
          error: {
            state: true,
            message: error.message,
          },
        });
      }
    };

    movieFunc();
  }, []);

  console.log(state.movieState);

  let movieList = [];

  return (
    <div className="App">
      <h1>movies</h1>
      <ul>
        <li>
          <Link to="/Upcoming">Upcoming</Link>
        </li>
        <li>
          <Link to="/NowPlaying">NowPlaying</Link>
        </li>
      </ul>
      <Route path="/Upcoming" component={Upcoming} />
      <Route path="/NowPlaying" component={NowPlaying} />
    </div>
  );
}

export default App;
