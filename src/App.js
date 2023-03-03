import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  // const user = null;
  //useSelector used to get data from store
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        //console.log("logged in", userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.emaill,
          })
        );
      } else {
        //logged out
        //console.log("logged out", userAuth);
        dispatch(logout);
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
