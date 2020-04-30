import React from "react";
import { Switch, Route } from "react-router-dom";
import GithubLogin from "../github-login";

const Public = () => {
  return (
    <Switch>
      <Route path={["/", "/callback"]} exact component={GithubLogin} />
    </Switch>
  );
};

export default Public;
