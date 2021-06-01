import React from "react";
import "./style.css";
import a1 from "../../images/1.svg";
import a2 from "../../images/mobile.png";
import a3 from "../../images/2.svg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-heading a-h">About Us</div>
        <div className="row r1">
          <div className="col-md-6 left">
            <h2 className="head">
              Feeling Low?
              <br />
              Need someone to hear you?
            </h2>
            <p className="body">
              Often there arise some thoughts in the human mind that tend to
              impact our day to day lives negatively. Poorly-managed negative
              thoughts are not good for mental as well as physical health.
              Negative attitudes and feelings of helplessness can create chronic
              stress, which upsets the body's hormone balance depleting the
              brain chemicals required for happiness. It is rightly said that
              "Misery loves Company" but in many cases, people are not
              comfortable in sharing their miseries with known ones.
            </p>
          </div>
          <div className="col-md-6 right">
            <img src={a1} alt="First" className="a-image" />
          </div>
        </div>
        <div className="row r2">
          <div className="col-md-6 left">
            <h2 className="head">
              Talk To Trained
              <br />
              Empathetic Listeners
            </h2>
            <p className="body">
              Hear Us is a group of trained empathetic listeners who decided to
              use their skills for a good cause. No matter who you are or where
              do you live or what you’re going through, we are here to listen to
              you and care for you. We might be strangers on the surface, but
              underneath we're just the friends you haven't met yet. Hear Us
              provides you free of cost sessions with empathetic listeners.
            </p>
            <div className="btn btn-1 mt-4">Download the App Now</div>
          </div>
          <div className="col-md-6 right">
            <img src={a2} alt="First" className="a-image" />
          </div>
        </div>
        <div className="row r3">
          <div className="col-md-6 left">
            <h2 className="head">
              Book A Session with
              <br />
              Licensed Psychologists
            </h2>
            <p className="body">
              Need more help? Book sessions anonymously with professional
              psychologists 24*7 by sitting at your home at the most affordable
              price
            </p>
            <div className="btn btn-1 mt-4">Book Now</div>
          </div>
          <div className="col-md-6 right">
            <img src={a3} alt="First" className="a-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
