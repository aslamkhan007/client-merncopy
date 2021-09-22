import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
  

    const res = await fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data)

    if (res.status === 422 || !data) {
      window.alert("invalid credential");
    } else {
      window.alert("login successfully");
    }
    history.push("/");
  };

  return (
    <>
      <div>
        <NavLink to="/signup"> create an account</NavLink>
      </div>
      <form method="post">
        <div className="form-group">
          <label htmlFor="email">User Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
           
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Your password"
          />
        </div>

        <div className="form-group form-button">
          <input
            type="submit"
            name="signin"
            id="signin"
            className="form-submit"
            value="Log in "
            onClick={loginUser}
          ></input>
        </div>
      </form>
    </>
  );
};

export default Login;
