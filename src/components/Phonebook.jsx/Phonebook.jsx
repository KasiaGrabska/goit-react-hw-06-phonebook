import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/contactSlice';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

const Phonebook = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
      <ContactList />
    </div>
  );
};

export default Phonebook;
