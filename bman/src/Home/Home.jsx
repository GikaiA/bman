import React from "react";
import "./Home.css";
import videobg from "../images/editing-bg.jpg";

function Home() {
  return (
    <div className="home">
      <div className="bg-wrapper">
        <img src={videobg} alt="editing-bg" className="editing-bg"></img>
      </div>
      <div className="heading-section">
        <h1 className="heading-title"> Welcome to Bman Productions</h1>
        <p className="portfolio-paragraph">
          Home of the Miami-based Video Editor
        </p>
      </div>
    </div>
  );
}

export default Home;
