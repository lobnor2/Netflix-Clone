import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";

function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log("logged in", userAuth);
      } else {
        //logged out
        console.log("logged out", userAuth);
      }
    });
    //when it cleans up run this function
    //better for performance
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
