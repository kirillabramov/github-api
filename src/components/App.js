import React, { useEffect } from "react";
import Public from "./navigation/Public";
import Private from "./navigation/Private";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthorized } from "../redux/auth/actions";
import { isAuthorized } from "../data-providers";
import { getIsAuthorizedSelector } from "../redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuthorizedSelector);

  useEffect(() => {
    dispatch(setIsAuthorized(isAuthorized()));
  }, [isAuth, dispatch]);

  return <div className="App">{isAuth ? <Private /> : <Public />}</div>;
}

export default App;
