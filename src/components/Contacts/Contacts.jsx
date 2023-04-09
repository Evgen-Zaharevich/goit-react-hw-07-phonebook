// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getFilter, getContact } from 'redux/selectors';
import { List, ListItem, Button } from 'components/Contacts/Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContact);

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
      {showFilteredContacts().map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
