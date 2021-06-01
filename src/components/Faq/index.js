import React from "react";
import "./style.css";

const Faq = () => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-heading f-h">FAQ</div>
        <div className="faq-card">
          <div className="card-heading">What is Hear Us?</div>
          <div className="card-content">
            HearUS is an online emotional support system which provides trained
            listeners so that you can share your problems and issues without
            being judged.You can also get consultation from licensed
            psychologists.
          </div>
        </div>
        <div className="faq-card">
          <div className="card-heading">Who are the Listeners?</div>
          <div className="card-content">
            Listeners are trained volunteers under the supervision of
            Psychologists , majorly someone who belongs to this field.
          </div>
        </div>
        <div className="faq-card">
          <div className="card-heading">Can I become a listener?</div>
          <div className="card-content">
            Yes, anyone who wants to help others can volunteer as a listener by
            just filling out a form.
          </div>
        </div>
        <div className="faq-card">
          <div className="card-heading">How do I book a session?</div>
          <div className="card-content">
            (i) Click on the ‘Book Now’ button. (ii) Fill out the form (iii)
            Choose the duration for the session (iv) Click on ‘Pay Now’.
          </div>
        </div>
        <div className="faq-card">
          <div className="card-heading">
            Is there any other way of booking a session or to connect to a
            listener?
          </div>
          <div className="card-content">
            Yes, you can book a session or connect to a listener using WhatsApp
            by clicking on the Whatsapp button.
          </div>
        </div>
        <div className="faq-card">
          <div className="card-heading">What are the charges ?</div>
          <div className="card-content">
            Its totally free of cost if you want to connect to a listener.
            Online counselling sessions with licensed psychologists are paid.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
