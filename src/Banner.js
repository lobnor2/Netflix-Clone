import React from "react";
import "./Banner.css";
const Banner = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundColor: "black",
        // backgroundImage: `url('https://')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            " This is a test descriptionlorem100 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ex veniam exercitationem adipisicing elit. Labore ex i like to play after that we went to eat food and  ",
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
