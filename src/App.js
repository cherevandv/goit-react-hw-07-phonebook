import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './App.module.css';
import * as operations from './redux/operations';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchAllContacts());
  }, []);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
