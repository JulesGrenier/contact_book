import React, { Component, Fragment } from 'react';
import ContactsList from '../components/contactList/ContactsList';

class ContactsListContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      contacts: []
    }
  }

  componentWillMount(){
    fetch('api/contacts')
    .then(res => res.json())
    .then(contacts => this.setState({ contacts }))
  }
  
  render() {
    return (
      <Fragment>
        <ContactsList contacts={this.state.contacts} />
      </Fragment>
    );
  }
}

export default ContactsListContainer;