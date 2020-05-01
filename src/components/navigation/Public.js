import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GithubLogin from "../github-login";
import appLinks from "../../constants/appLinks";

const Public = () => {
  return (
    <Switch>
      <Route
        path={[appLinks.login, appLinks.githubCallback]}
        exact
        component={GithubLogin}
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
