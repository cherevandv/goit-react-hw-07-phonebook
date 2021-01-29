import * as contactsAPI from 'services/contacts-api';
import { actions } from './';

export const addContact = (name, number) => async dispatch => {
  dispatch(actions.addContactRequest());
  try {
    const { data } = await contactsAPI.fetchAddContact(name, number);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await contactsAPI.fetchDeleteContactById(id);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};

export const fetchAllContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const response = await contactsAPI.fetchContacts();
    dispatch(actions.fetchContactsSuccess(response));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};
