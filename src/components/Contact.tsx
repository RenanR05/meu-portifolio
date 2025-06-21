import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container bd-grid">
        <form action="#" className="contact-form">
          <input type="text" placeholder="Name" className="contact-input" />
          <input type="email" placeholder="Email" className="contact-input" />
          <textarea placeholder="Message" cols={0} rows={10} className="contact-input"></textarea>

          <input type="button" value="Send" className="contact-button button" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
