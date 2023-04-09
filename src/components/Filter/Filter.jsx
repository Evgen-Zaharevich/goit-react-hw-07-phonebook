import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Text, Input } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleInputFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <>
      <Text>Find contacts by name</Text>
      <Input
        autoComplete="off"
        id="filter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        onChange={handleInputFilter}
        value={filter}
      />
    </>
  );
};
