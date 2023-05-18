import React from "react";
import "../styles/Profile.scss";
import selfie from "../assets/selfie.jpg";

function Profile() {
  return (
    <div className="container profile-container">
      <div className="profile--left">
        <img src={selfie} alt="horse" className="photo" />
        <div />
      </div>
      <div className="profile--right">
        <div className="profile--name">Krzysztof Szałankiewicz</div>
        <div className="profile--phone">
          Phone:<span> +48 731 010 998</span>
        </div>
        <div className="profile--mail">
          E-mail:<span> szalankiewiczkrz@gmail.com</span>
        </div>
        <div className="profile--location">
          From:<span> Warsaw, Poland</span>
        </div>
        <div className="profile--description">
          I am a self-taught, good mannered person seeking new challenges. I am
          a fast learner, sharp-minded and looking for front-end developer job.
          I have an experience of working and leading groups of people. Below
          you can find my projects and technologies used to create them.
        </div>
      </div>
    </div>
  );
}

export default Profile;
