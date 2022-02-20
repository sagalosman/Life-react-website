import React from "react";
import AboutPage from "../assets/aboutpage.jpg";
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutPage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Life is more than a place where high performers come to be their best. We’ve transformed every aspect of our membership to encompass integrated digital and in-club offerings to keep you at your best—all the time, any time. Discover the offerings below, plus The Life Standard for health, safety, and cleanliness. Are you a former member at Life? Click below to learn about the benefits you may be eligible to receive upon returning.
        </p>
      </div>
    </div>
  );
}

export default About;
