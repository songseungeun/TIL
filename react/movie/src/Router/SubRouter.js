import React from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "../Page/Detail";

const SubRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path="/NowPlaying"
        render={() => {
          return <p>스킬을 선택해주세요</p>;
        }}
      />
      <Route path="/Detail/:id" component={Detail} />
    </Switch>
  );
};

export default SubRouter;
