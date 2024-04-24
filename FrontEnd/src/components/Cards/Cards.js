import React from "react";
import "./Cards.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Cards({ profileImage, cardPhrase }) {
  return (
    <div className="containercard">
      <div className="container">
        <div className="card">
          <div className="front">
            <div className="card-top">
              <p className="card-top-para">Profile</p>
            </div>

            <img src={profileImage} alt="Profile" className="profile-image" />

            <p className="heading">{cardPhrase}</p>
            <p className="follow"></p>
          </div>
          <div className="back">
            <p className="heading">Contact Me On</p>

            <div className="icons">
              <a><FaGithub size={40}/></a>
              <a><FaLinkedinIn size={40}/></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
