import React from "react";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import { getAuthStatusSelector } from "../../redux/auth/selectors";
import AsyncArea from "../common/async-area";

const LoginPage = ({ location: { search } }) => {
  const status = useSelector(getAuthStatusSelector);

  return (
    <AsyncArea status={status}>
      <LoginButton urlQuery={search} />
    </AsyncArea>
  );
};

export default LoginPage;
