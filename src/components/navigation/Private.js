import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";

const Private = () => {
  return (
    <Switch>
      <Route path="/search" component={SearchPage} exact />
      <Redirect
        to={{
          pathname: "/search",
        }}
      />
    </Switch>
  );
};

export default Private;
