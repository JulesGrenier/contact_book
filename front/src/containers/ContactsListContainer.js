import React, { Component, Fragment } from 'react';
import ContactsList from '../components/ContactsList';

class ContactsListContainer extends Component {
  render() {
    return (
      <Fragment>
        <ContactsList />
      </Fragment>
    );
  }
}

export default ContactsListContainer;