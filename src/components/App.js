import React, { useState } from "react";
import { connect } from "react-redux";
import Input from "./input";
import { CLIENT_ID } from "../constants/github";
import Public from "./navigation/Public";

function App(props) {
  const [username, setUsername] = useState("");

  const onUsernameChange = ({ target: { value } }) => {
    setUsername(value);
  };

  // const getAccessToken = fetch("https://github.com/login/oauth/access_token", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json;charset=utf-8",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  //   body: JSON.stringify({}),
  // });
  const fetchLogin = fetch("");

  return (
    <div className="App">
      <Public />
    </div>
  );
}

export default App;
