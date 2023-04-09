import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/operations';
import {
  FormField,
  ErrorMessage,
  Form,
  Field,
  Button,
} from 'components/Form/Form.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  console.log(contacts);

  const addNewContact = newContact => {
    console.log(newContact);
    const hasAlready = contacts.some(
      el => el.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasAlready) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContacts(newContact));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        addNewContact({
          id: nanoid(),
          ...values,
        });
        resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="p" />
        </FormField>
        <FormField>
          Phone
          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="phone" component="p" />
        </FormField>
        <Button type="submit">Add Contact</Button>
      </Form>
    </Formik>
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'To Short!')
    .max(30, 'To Long')
    .required('Required'),
  phone: yup
    .string()
    .min(7, 'To Short!')
    .max(19, 'To Long')
    .required('Required'),
});
