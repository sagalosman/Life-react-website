import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> LIFE</h1>
        <p>Join now for complimentary Personal Training and Pilates sessions.</p>
        <Link to="/class">
          <button>Join Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
