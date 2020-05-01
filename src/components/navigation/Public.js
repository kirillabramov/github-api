import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GithubLogin from "../github-login";

const Public = () => {
  return (
    <Switch>
      <Route path={["/login", "/callback"]} exact component={GithubLogin} />
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    </Switch>
  );
};

export default Public;
