import React from 'react';
import '../styles/contacts-list.scss';

const ContactsList = ({contacts}) => {
  return (
    <div className='contacts-list'>

      <div className="contact">
        <img src="https://avatars3.githubusercontent.com/u/34350330?s=400&u=db259e4a5dca73ed6ea5a941e0b6fc41b42b62b5&v=4" alt="" className="contact-avatar" />
        <h3 className="contact-name">Name</h3>
      </div>

      <div className="contact">
        <img src="https://avatars3.githubusercontent.com/u/34350330?s=400&u=db259e4a5dca73ed6ea5a941e0b6fc41b42b62b5&v=4" alt="" className="contact-avatar" />
        <h3 className="contact-name">Name</h3>
      </div>

      <div className="contact">
        <img src="https://avatars3.githubusercontent.com/u/34350330?s=400&u=db259e4a5dca73ed6ea5a941e0b6fc41b42b62b5&v=4" alt="" className="contact-avatar" />
        <h3 className="contact-name">Name</h3>
      </div>

      <div className="contact">
        <img src="https://avatars3.githubusercontent.com/u/34350330?s=400&u=db259e4a5dca73ed6ea5a941e0b6fc41b42b62b5&v=4" alt="" className="contact-avatar" />
        <h3 className="contact-name">Name</h3>
      </div>

      <div className="contact">
        <img src="https://avatars3.githubusercontent.com/u/34350330?s=400&u=db259e4a5dca73ed6ea5a941e0b6fc41b42b62b5&v=4" alt="" className="contact-avatar" />
        <h3 className="contact-name">Name</h3>
      </div>

    </div>
  );
};

export default ContactsList;