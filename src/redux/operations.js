import * as contactsAPI from '../services/contacts-api';
import * as contactsActions from './actions';

export const addContact = (name, number) => async dispatch => {
  dispatch(contactsActions.addContactRequest());
  try {
    const { data } = await contactsAPI.fetchAddContact(name, number);
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await contactsAPI.fetchDeleteContactById(id);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};

export const fetchAllContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const response = await contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(response));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
