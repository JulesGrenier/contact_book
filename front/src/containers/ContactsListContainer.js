import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchContacts, fetchSelectedContact } from '../actions/index';
import ContactsList from '../components/contactList/ContactsList';

class ContactsListContainer extends Component {

  constructor(props){
    super(props);

    this.selectContact = this.selectContact.bind(this);
  }

  componentWillMount(){
    this.props.fetchContacts();
  }

  selectContact(id){
    this.props.fetchSelectedContact(id);
  }
  
  render() {

    const { contacts } = this.props;
    return (
      <Fragment>
        <ContactsList contacts={contacts} selectContact={(id) => this.selectContact(id)} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.list,
});

export default connect(mapStateToProps, { fetchContacts, fetchSelectedContact })(ContactsListContainer);