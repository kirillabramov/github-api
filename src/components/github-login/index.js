import React, { useEffect } from "react";
import qs from "query-string";
import endpoints from "../../constants/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { setAuthCode, getAccessToken } from "../../redux/auth/actions";
import { getAuthStatusSelector } from "../../redux/auth/selectors";
import fetchStatuses from "../../constants/fetchStatuses";

const GithubLogin = ({ location: { search } }) => {
  const dispatch = useDispatch();
  const status = useSelector(getAuthStatusSelector);

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
      {status === fetchStatuses.IN_PROGRESS && <div>Loading...</div>}
      {status === fetchStatuses.FAILED && <div>Error</div>}
    </>
  );
};

export default GithubLogin;
