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
import Popular from "./Page/Popular";

import { reducer, initialState } from "./reducer/movieReducer";

function App() {
  // console.log(state.movieState);

  return (
    <div className="App">
      <h1>movies</h1>

      <ul className="nav clearfix">
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Popular">Popular</Link>
        </li>
        <li>
          <Link to="/NowPlaying">NowPlaying</Link>
        </li>
        <li>
          <Link to="/Upcoming">Upcoming</Link>
        </li>
        <li>
          <Link to="/Search">Search</Link>
        </li>
      </ul>

      <Route path="/About" component={About} />
      <Route path="/Popular" component={Popular} />
      <Route path="/NowPlaying" component={NowPlaying} />
      <Route path="/Upcoming" component={Upcoming} />
      <Route path="/Search" component={Search} />
      {/* <Route path="/Upcoming/:id" render={Detail} /> */}
    </div>
  );
}

export default App;
