import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../components/login-page";
import appLinks from "./appLinks";

const Public = () => {
  return (
    <Switch>
      <Route
        path={[appLinks.login, appLinks.githubCallback]}
        exact
        component={LoginPage}
      />
      <Redirect
        to={{
          pathname: appLinks.login,
        }}
      />
    </Switch>
  );
};

export default Public;
