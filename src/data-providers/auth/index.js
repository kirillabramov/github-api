import { CLIENT_ID, CLIENT_SECRET } from "../../constants/github";
import endpoints from "../../constants/endpoints";

export const getAccessTokenRequest = (code) =>
  fetch(
    `${endpoints.PROXY_URL}${endpoints.GITHUB_ACCESS_TOKEN}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    }
  ).then((response) => response.text());
