import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import SearchPage from "../components/search-page";
import appLinks from "./appLinks";

const Private = () => {
  return (
    <Switch>
      <Route path={appLinks.search} component={SearchPage} exact />
      <Redirect
        to={{
          pathname: appLinks.search,
        }}
      />
    </Switch>
  );
};

export default Private;
