import React, { useState } from "react";
import { connect } from "react-redux";
import Input from "./input";

function App(props) {
  const [username, setUsername] = useState("");

  const onUsernameChange = ({ target: { value } }) => {
    setUsername(value);
  };

  const fetchLogin = fetch("");

  return (
    <div className="App">
      <Input search={username} onChange={onUsernameChange} />
      <button>Login</button>
    </div>
  );
}

const MSTP = (state) => {
  console.log(state);
  return {
    auth: state.auth.test,
  };
};

export default connect(MSTP)(App);
