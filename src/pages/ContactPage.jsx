import React from "react";
import "../styles/Base.scss";
import "../styles/Contact.scss";

function AboutPage() {
  return (
    <div className="container contact--container">
      <h3 className="contact--heading">Contact</h3>
      <div className="contact--description">
        Below you can find my phone number, e-mail address and place I live.
      </div>
      <div className="contact--phone">
        Phone:<span className="contact--phone-value"> +48 731 010 998</span>
      </div>
      <div className="contact--mail">
        E-mail:
        <span className="contact--mail-value"> szalankiewiczkrz@gmail.com</span>
      </div>
      <div className="contact--location">
        From:<span className="contact--location-value"> Warsaw, Poland</span>
      </div>
    </div>
  );
}

export default AboutPage;
