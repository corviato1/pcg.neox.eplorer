import React from "react";

const Login = () => (
  <div>
    <h1>Login</h1>
    <form>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Login;
