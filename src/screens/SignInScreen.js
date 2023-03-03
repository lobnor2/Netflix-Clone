import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase";

import "./SignInScreen.css";

const SignInScreen = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    // setEmail(e.target.value);
    // setPassword(e.target.value);

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((signin) => {
        console.log(signin);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          New to Netflix?{" "}
          <span className="signUpScreen__link" onClick={register}>
            {" "}
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
