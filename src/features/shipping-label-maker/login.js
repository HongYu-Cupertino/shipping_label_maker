import React, { useState } from "react";
import { useApp } from "../../appContext";
import LoginRoot from "./login-styles";

const validUsers = [
  { userName: "hongyu", password: "hongyupwd" },
  { userName: "keshav", password: "keshavpwd" },
  { userName: "pratik", password: "pratikpwd" },
];

const Login = () => {
  const { setLoginUser, setIsAuthenticated } = useApp();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginfailed] = useState(false);

  const handleUserNameChange = (evt) => {
    if (loginFailed) {
      setLoginfailed(false);
    }

    setUserName(evt.target.value);
  };

  const handlePwdChange = (evt) => {
    if (loginFailed) {
      setLoginfailed(false);
    }
    setPassword(evt.target.value);
  };

  const isValidUser = (name, pwd) => {
    const result = validUsers.find(
      (user) => user.userName === name && user.password === pwd
    );
    return result ? true : false;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // check if userName&password is in the validUsers, if yes,
    // set isAuthenticated in AppContext to true
    if (isValidUser(userName, password)) {
      setLoginUser(userName);
      setIsAuthenticated(true);
    } else {
      setLoginfailed(true);
    }
  };
  return (
    <LoginRoot elevation={3}>
      <LoginRoot.Form onSubmit={handleSubmit}>
        <LoginRoot.Form.FormTypography component="h1">
          Please login:
        </LoginRoot.Form.FormTypography>
        <LoginRoot.Form.FormField
          type="input"
          label="User Name"
          placeholder="User Name"
          variant="outlined"
          required
          InputLabelProps={{
            shrink: true,
          }}
          value={userName}
          onChange={handleUserNameChange}
        ></LoginRoot.Form.FormField>
        <LoginRoot.Form.FormField
          type="password"
          label="Password"
          placeholder="Password"
          variant="outlined"
          required
          InputLabelProps={{
            shrink: true,
          }}
          value={password}
          onChange={handlePwdChange}
        ></LoginRoot.Form.FormField>

        <LoginRoot.Form.FormButton
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </LoginRoot.Form.FormButton>
        {loginFailed && (
          <LoginRoot.Form.FormTypography component="h6" color="error">
            Login failed. Please try again.
          </LoginRoot.Form.FormTypography>
        )}
      </LoginRoot.Form>
    </LoginRoot>
  );
};

export default Login;
