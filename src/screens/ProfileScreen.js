import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>lnorbu151@gmail.com</h2>
            <div className="profileScreen__plans">
              <h4>Plans (Current Plan: premium)</h4>
              <h5>Renewal date: 04/02/2024</h5>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen___signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
