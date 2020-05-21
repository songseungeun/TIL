/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useReducer } from "react";
import { movies } from "./api";
import { Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Page/About";
import Upcoming from "./Page/Upcoming";
import NowPlaying from "./Page/NowPlaying";
import Search from "./Page/Search";

import { reducer, initialState } from "./reducer/movieReducer";
function Movie() {}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const movieFunc = async () => {
      try {
        dispatch({ type: "LOADING" });
        let movieData = await movies.getNowPlaying();
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

  // console.log(state.movieState);

  let movieList = [];

  return (
    <div className="App">
      <h1>movies</h1>

      <ul className="nav clearfix">
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Upcoming">Upcoming</Link>
        </li>
        <li>
          <Link to="/NowPlaying">NowPlaying</Link>
        </li>
        <li>
          <Link to="/Search">Search</Link>
        </li>
      </ul>

      <Route path="/About" component={About} />
      <Route path="/Upcoming" render={() => <Upcoming state={state} />} />
      <Route path="/NowPlaying" render={() => <NowPlaying state={state} />} />
      <Route path="/Search" component={Search} />
      {/* <Route path="/Upcoming/:id" render={Detail} /> */}
    </div>
  );
}

export default App;
