import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/operations';
import { getVisiblesContacts } from '../../redux/selectors';
import './ContactList.module.css';

export default function ContactList() {
  const contactsBook = useSelector(getVisiblesContacts);

  const dispatch = useDispatch();

  return (
    <ul>
      {contactsBook.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => dispatch(operations.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
