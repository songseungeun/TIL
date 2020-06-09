import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Movies from "./Movies";
import About from "./About";
import TopBoxOffice from "./TopBoxOffice";
import Upcoming from "./Upcoming";
import Search from "./Search";
import { NowProvider } from "./MoviesContext";

function App() {
  return (
    <NowProvider>
      <div className="Wrapper">
        <h1>the movie</h1>
        <ul>
          <li>
            <Link to="/">Now Playing</Link>
          </li>
          <li>
            <Link to="/topboxoffice">Top Box Office</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="Detail"></div>
        <Switch>
          <Route path="/" component={Movies} exact />
          <Route path="/topboxoffice" component={TopBoxOffice} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
          <Route
            render={({ location }) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다.</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>
      </div>
    </NowProvider>
  );
}

export default App;
