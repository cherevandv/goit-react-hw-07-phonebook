import * as contactsAPI from '../services/contacts-api';
import * as contactsActions from './actions';

export const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  contactsAPI
    .fetchAddContact(name, number)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  contactsAPI
    .fetchDeleteContactById(id)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsActions.deleteContactError(error)));
};

export const fetchAllContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  contactsAPI
    .fetchContacts()
    .then(res => dispatch(contactsActions.fetchContactsSuccess(res)))
    .catch(error => dispatch(contactsActions.fetchContactsError(error)));
};
