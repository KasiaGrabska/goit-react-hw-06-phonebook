import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contactSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {name}: {number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;
