import React, { useEffect } from "react";
import qs from "query-string";
import endpoints from "../../constants/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { setAuthCode, getAccessToken } from "../../redux/auth/actions";

const GithubLogin = ({ location: { search } }) => {
  const dispatch = useDispatch();
  const useSelectoewer = useSelector((state) => state);
  useEffect(() => {
    const parsedSearch = qs.parse(search);
    if (parsedSearch && parsedSearch.code) {
      dispatch(setAuthCode(parsedSearch.code));
      dispatch(getAccessToken());
    }
  }, [search]);
  console.log(useSelectoewer);
  const onClick = () => {
    window.location.href = endpoints.GITHUB_AUTHORIZE;
  };

  return <button onClick={onClick}>Login to Github</button>;
};

export default GithubLogin;
