import React from "react";
import "./style.css";

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading c-h">Get In Touch</div>
        <div className="section-content c-form">
          <div className="row">
            <div className="col-4 left">
              <div className="c-link">
                <i class="fas fa-map-marker-alt c-icon"></i>
                <h3 className="c-title">Address</h3>
                <p className="c-content">
                  Lorem, ipsum dolor.
                  <br />
                  Lorem ipsum dolor sit amet.
                  <br />
                  Lorem ipsum dolor sit.
                </p>
              </div>
              <div className="c-link">
                <i class="fas fa-phone-alt c-icon"></i>
                <h3 className="c-title">Phone</h3>
                <p className="c-content">
                  +91 9844652458
                  <br />
                  +91 9911145878
                </p>
              </div>
              <div className="c-link">
                <i class="fas fa-envelope c-icon"></i>

                <h3 className="c-title">Email</h3>
                <p className="c-content">example@gmail.com</p>
              </div>
            </div>
            <div className="col-8 right">
              <form
                action=""
                className="contact-form"
                id="contact-form"
                onSubmit={(e) => submitHandler(e)}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  className="c-input"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  className="c-input"
                />
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  required
                  className="c-input"
                />
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                  className="c-input"
                />
                <button className="btn btn-2" type="submit">
                  Get in Touch <i class="fas fa-paper-plane form-icon"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
