import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export function fetchDeleteContactById(id) {
  return axios.delete(`/contacts/${id}`);
}

export function fetchAddContact(name, number) {
  const newContact = { name, number };
  return axios.post('/contacts', newContact);
}
