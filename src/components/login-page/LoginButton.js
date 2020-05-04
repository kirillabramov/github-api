import React, { useEffect } from "react";
import qs from "query-string";
import endpoints from "../../constants/endpoints";
import { useDispatch } from "react-redux";
import { setAuthCode, getAccessToken } from "../../redux/auth/actions";

const LoginButton = ({ location: { search } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const parsedSearch = qs.parse(search);
    if (parsedSearch && parsedSearch.code) {
      dispatch(setAuthCode(parsedSearch.code));
      dispatch(getAccessToken());
    }
  }, [search, dispatch]);

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
