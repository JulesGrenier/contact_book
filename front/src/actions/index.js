import {
  FETCH_CONTACTS,
  FETCH_SELECTED_CONTACT
} from '../constants/actionTypes';

export const fetchContacts = () => dispatch => {
  fetch('api/contacts')
    .then(res => res.json())
    .then(contacts =>
      dispatch({
        type: FETCH_CONTACTS,
        content: contacts
      })
    )
    .catch(error => console.error(error))
};


export const fetchSelectedContact = (id) => dispatch => {
  fetch(`api/contacts/${id}`)
    .then(res => res.json())
    .then(contact =>
      dispatch({
        type: FETCH_SELECTED_CONTACT,
        content: contact
      })
    )
};