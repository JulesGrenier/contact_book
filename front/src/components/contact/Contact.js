import React from 'react';
import Header from './Header';
import '../../styles/contact.scss';

const Contact = () => {
  return (
    <div id="contact">
      <Header />

      <div className="contact-infos p-2">

        <div className="contact-infos-header d-flex f-row align-items-center">
          <img src="https://avatars3.githubusercontent.com/u/34350330?s=400&u=db259e4a5dca73ed6ea5a941e0b6fc41b42b62b5&v=4" alt="" className="contact-avatar circle shadow-1"/>
          <h2 className="contact-name mt-0 ml-1_5">Name</h2>
        </div>

        <div className="contact-phone my-2_5">
          <h3 className="mb-0">Phone Number</h3>
          <p>0123456789</p>
        </div>

        <div className="contact-email my-2_5">
          <h3 className="mb-0">E-mail Address</h3>
          <p>email.address@example.domain</p>
        </div>

        <div className="contact-address my-2_5">
          <h3 className="mb-0">Address</h3>
          <p>Somewhere on Earth</p>
        </div>

        <div className="contact-birthday my-2_5">
          <h3 className="mb-0">Birthday</h3>
          <p>Not yet born</p>
        </div>

        <div className="contact-note my-2_5">
          <h3 className="mb-0">Note</h3>
          <p>Some notes...</p>
        </div>        

      </div>

    </div>
  );
};

export default Contact;