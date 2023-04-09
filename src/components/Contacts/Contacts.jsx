// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { List, ListItem, Button } from 'components/Contacts/Contacts.styled';
import { deleteContacts } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getFilteredContacts = filterName => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  const showFilteredContacts = () => {
    return filter.length > 0 ? getFilteredContacts(filter) : contacts;
  };

  return (
    <List>
      {showFilteredContacts().map(({ id, name, phone }) => (
        <ListItem key={id}>
          {name}: {phone}
          <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
