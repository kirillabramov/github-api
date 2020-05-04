import React, { useEffect } from "react";
import qs from "query-string";
import endpoints from "../../constants/endpoints";
import { useDispatch } from "react-redux";
import { setAuthCode, getAccessToken } from "../../redux/auth/actions";

const LoginButton = ({ urlQuery }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const parsedUrlQuery = qs.parse(urlQuery);
    if (parsedUrlQuery && parsedUrlQuery.code) {
      dispatch(setAuthCode(parsedUrlQuery.code));
      dispatch(getAccessToken());
    }
  }, [urlQuery, dispatch]);

  const onClick = () => {
    window.location.href = endpoints.GITHUB_AUTHORIZE;
  };

  return (
    <>
      <button onClick={onClick}>Login to Github</button>
    </>
  );
};

export default LoginButton;
