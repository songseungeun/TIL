import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Page/Main";
import About from "../Page/About";
import Skill from "../Page/Skill";
import HistoryTab from "../Page/HistoryTab";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/About" component={About} />
      <Route path="/Skill" component={Skill} />
      <Route path="/history" component={HistoryTab} />
      <Route
        render={({ location }) => {
          return (
            <div>
              <h2>없는 페이지 입니다.</h2>
              <p>{location.pathname}</p>
            </div>
          );
        }}
      />
    </Switch>
  );
};

export default MainRouter;
