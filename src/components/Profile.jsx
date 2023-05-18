import React from "react";
import "../styles/Profile.scss";
import selfie from "../assets/selfie.jpg";

function Profile() {
  return (
    <div className="container profile-container">
      <div className="profile--left">
        <img src={selfie} alt="horse" className="profile--photo" />
        <div />
      </div>
      <div className="profile--right">
        <div className="profile--welcome">Hi, my name is</div>
        <div className="profile--name">Krzysztof Szałankiewicz</div>
        <div className="profile--description">
          I am self-taught, good mannered person seeking new challenges. I am a
          fast learner, sharp-minded and looking for front-end developer job. I
          have an experience of working and leading groups of people in a large
          company. In spare time I always learn new stuff about front-end
          development.
        </div>
      </div>
    </div>
  );
}

export default Profile;
