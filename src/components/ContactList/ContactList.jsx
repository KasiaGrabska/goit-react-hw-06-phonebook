import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  selectFilteredContacts,
} from '../../store/contactSlice';
import ContactItem from '../ContactItem.jsx/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
