import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault(); // to prevent the page from refreshing when the user clicks sign-in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        if (userCredentials) {
          // redirecting the user to home page, once their account is created
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5 for="email">Email: </h5>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="  E-mail"
          />
          <h5 for="password">Password: </h5>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="  Password"
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>
        <p>
          By signing in you agree to <strong>AMAZON CLONE'S</strong> Conditions
          of Use and Sale.Please see our Privacy Notice, our Cookie Notice and
          our Interest Based Ads
        </p>
        <button onClick={signUp} className="login__signUpButton">
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Login;
