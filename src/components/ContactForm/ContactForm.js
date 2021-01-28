import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/operations';
import { getItems } from '../../redux/selectors';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsBook = useSelector(getItems);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) {
      return alert(`Some field is empty.`);
    }
    const sameName = findSameName(name);
    if (sameName) {
      formReset();
      return alert(`${name} is already in contacts.`);
    }
    dispatch(operations.addContact(name, number));
    formReset();
  };
  const findSameName = name => {
    return contactsBook.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="">
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name.."
          value={name}
          onChange={handleInputChange}
        ></input>
      </label>
      <label className={s.label} htmlFor="">
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number.."
          value={number}
          onChange={handleInputChange}
        ></input>
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
