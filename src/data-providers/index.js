import { CLIENT_ID, CLIENT_SECRET } from "../constants/github";
import endpoints from "../constants/endpoints";
import ls from "../constants/localStorage";
import perPage from "../constants/perPage";

const defaultHeaders = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

const getAccessTokenUrl = (code) =>
  `${endpoints.PROXY_URL}${endpoints.GITHUB_ACCESS_TOKEN}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`;

const getRepositoriesUrl = ({ query, pageNumber, sorting }) =>
  `${endpoints.GET_REPOSITORIES_WITH_QUERY}${query}&page=${pageNumber}&per_page=${perPage}&sort=${sorting}`;

export const getAccessTokenRequest = (code) =>
  fetch(getAccessTokenUrl(code), {
    method: "POST",
    headers: defaultHeaders,
  }).then((response) => response.text());

export const isAuthorized = () => !!localStorage.getItem(ls.token);

export const getRepositoriesRequset = (query, pageNumber, sorting) =>
  fetch(getRepositoriesUrl({ query, sorting, pageNumber }), {
    method: "GET",
  }).then((response) => response.json());
