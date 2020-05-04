import React from "react";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import { getAuthStatusSelector } from "../../redux/auth/selectors";
import AsyncArea from "../common/async-area";

const LoginPage = () => {
  const status = useSelector(getAuthStatusSelector);

  return (
    <AsyncArea status={status}>
      <LoginButton />
    </AsyncArea>
  );
};

export default LoginPage;
