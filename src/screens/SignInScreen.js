import React from "react";
import "./SignInScreen.css";

const SignInScreen = () => {
  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <h4>
          New to Netflix? <span> Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
