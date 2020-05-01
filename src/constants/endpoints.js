import { CLIENT_ID } from "./github";

export default {
  PROXY_URL: "https://cors-anywhere.herokuapp.com/",
  GITHUB_AUTHORIZE: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=https://localhost:3000/callback`,
  GITHUB_ACCESS_TOKEN: "https://github.com/login/oauth/access_token",
  GET_REPOSITORIES_WITH_QUERY: "https://api.github.com/search/repositories?q=",
};
