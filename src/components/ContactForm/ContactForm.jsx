import { useDispatch } from 'react-redux';
import { addContact } from '../../store/contactSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const number = formData.get('number');
    if (!name || !number) return;
    dispatch(addContact({ name, number }));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        Number
        <input type="tel" name="number" required />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
