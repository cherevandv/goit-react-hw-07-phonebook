import { useSelector, useDispatch } from 'react-redux';
import { operations } from '../../redux';
import { getVisiblesContacts, getLoading } from '../../redux/selectors';
import Loader from 'react-loader-spinner';
import './ContactList.module.css';

export default function ContactList() {
  const contactsBook = useSelector(getVisiblesContacts);
  const loadingContactsBook = useSelector(getLoading);

  const dispatch = useDispatch();

  return (
    <>
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
      {loadingContactsBook && (
        <Loader type="TailSpin" color="#6ebfd8" height={30} width={30} />
      )}
    </>
  );
}
