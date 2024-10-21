import React from 'react';

const Login = ({ handleLogin }) => {
  return (
    <div id="loginSection">
      <h1>Login to Job Application Tracker</h1>
      <button onClick={handleLogin} className="pure-button pure-button-primary">
        Login with GitHub
      </button>
    </div>
  );
};

export default Login;
